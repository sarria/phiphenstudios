import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Text from './Text'
import Label from './Label'
import Image_text from './Image_text'
import Images from './Images'
import Carousel from './Carousel'
import Announcements from './Announcements'
import Video from './Video'
import Contact from './Contact'

function PageContent({page, global}) {
	// const {navigation} = global;
	return page ? (
		<>
			<Header seo={page.seo} />

			{page.slug !== 'home-page' && 
				<Hero title={page.title} headerImage={page.content_blocks.headerImage} navigation={global.burgerNavigation}  />
			}

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
					case 'carousel':
						ele = <Carousel data={module} navigation={global.burgerNavigation} />
						break;
					case 'announcements':
						ele = <Announcements data={module} />
						break;
					case 'video':
						ele = <Video data={module} />
						break;
					case 'contact':
						ele = <Contact data={module} />
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

			<Footer 
				email={global.email} 
				telephone={global.telephone} 
				facebook={global.facebook} 
				twitter={global.twitter} 
				instagram={global.instagram} 
			/>
		</>		
	) : <></>
}

export default PageContent