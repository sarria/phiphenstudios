import queryPaths from '../query/paths'
import queryContent from '../query/content'
import NotFound from '../components/404'
import PageContent from '../components/PageContent'

// https://reactjsexample.com/minimal-carousel-component-for-react/

function Index({ global, page }) {
  return page ? <PageContent page={page} navigation={global.burgerNavigation} /> : <NotFound page={page} navigation={navigation} />
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
	const res = await fetch(process.env.API + queryContent('home-page'))
	const data = await res.json()
	const global = data.data?.acfOptionsGlobalOptions?.global
	const content = data.data?.content?.edges[0]?.node

  return {
    props: {
      global,
      page: typeof content === 'undefined' ? null : content
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}


export default Index
