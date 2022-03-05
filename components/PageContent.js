import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Text from './Text'
import Label from './Label'
import Image_text from './Image_text'
import Images from './Images'

function PageContent({navigation, page}) {
	console.log('page data', page)
	
	return page ? (
		<>
			<Header seo={page.seo} />

			<Hero title={page.title} headerImage={page.content_blocks.headerImage} navigation={navigation}  />

			{page.content_blocks.modules && page.content_blocks.modules.map((module, idx) => {
				let ele = <>{module.moduleType}</>
				
				switch(module.moduleType) {
					case 'text':
						ele = <Text data={module} />
						break;
					case 'label':
						ele = <Label data={module} />
						break;
					case 'image_text':
						ele = <Image_text data={module} />
						break;
					case 'images':
						ele = <Images data={module} />
						break;						
					default:
						// code block
				}
				
				return (
					<div key={idx}>
						{ele}
					</div>
				)
			})}

			<Footer />
		</>		
	) : <></>
}

export default PageContent