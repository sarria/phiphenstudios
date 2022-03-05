export default function query(slug) {

	return `
		query {
			acfOptionsGlobalOptions {
				global {
				  burgerNavigation {
					page {
					  ... on Page {
						slug
						title
					  }
					}
				  }
				}
			  }
			content: pages(where: {name: "${slug}"}) {
				edges {
					node {
						pageId
						slug
						title
						content_blocks {
							headerImage {
								altText
								sourceUrl
							}
							modules {
								moduleType
								label
								text
								layout
								images {
									image {
										altText
										sourceUrl
									}
								}
								imageText {
									image {
										altText
										sourceUrl
									}
									text
								}
								carousel {
									altText
									sourceUrl
								}
							}
						}
						seo {
							title
							metaDesc
							metaKeywords
						}
					}
				}
			}
		}
	`.replace(/\s\s+/g, ' ');
}
