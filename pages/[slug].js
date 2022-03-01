import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Link from 'next/link';


function Page({ page }) {
  return page ? (
    <div>
      {page.title}
      {/* <div>{page.content_blocks.headerImage.small}</div> */}

    </div>    
  ) : <div>404 Not found</div>
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
  const slug = context.params.slug
  const queryStr = 'http://phiphenstudios.everlivesolutions.com/graphql?query=query getPageContent { pages(where: {name: "' + slug + '"}) { edges { node { pageId slug title content_blocks { headerImage { altText small: sourceUrl(size: SMALL) max: sourceUrl(size: MAX) } modules { moduleType label text break images { image { altText full: sourceUrl(size: FULL) small: sourceUrl(size: SMALL) half: sourceUrl(size: HALF) } } imageText { image { altText small: sourceUrl(size: SMALL) half: sourceUrl(size: HALF) } text } } } } } } }'
  const res = await fetch(queryStr)
  const data = await res.json()
  const page = data.data?.pages?.edges[0]?.node

  return {
    props: {
      page: typeof page === 'undefined' ? null : page
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await fetch('http://phiphenstudios.everlivesolutions.com/graphql?query=query getPages {pages{edges{node{pageId slug title}}}}')
  const data = await res.json()

  // Get the paths we want to pre-render based on data
  // const paths = data.map((post) => ({
  //   params: { id: post.id },
  // }))
  const paths = data.data.pages.edges.map((item) => ({
    params: { slug: item.node.slug },
  })) 

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

export default Page
