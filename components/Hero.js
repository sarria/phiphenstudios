import Image from 'next/image'
import Burger from './burger'
import Quote from "./Quote"
// import parse from 'html-react-parser';
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './styles/hero.module.scss'
import logo from '../public/Phiphen-Post-Logo-Full-Color-Lg.png'
import decoration from '../public/decoration.png'
import mask from '../public/mask.png'
import Script from 'next/script'
// import SimpleImageSlider from "react-simple-image-slider"; 

function Hero({title, headerImage, navigation, carousel, quote, quoteAuthor}) {
	const cx = classNames.bind(styles);

	const images = !carousel ? [] : carousel.map(image => {
		return { url: image.sourceUrl }
	})

	return (
		<>
			<div className={cx(styles.root, {isCarousel: carousel})}>
				<Script src='/carousel.js' />

				{headerImage && 
					<Image
						alt={headerImage.altText}
						src={headerImage.sourceUrl}
						layout="fill"
						objectFit="cover"
						objectPosition="bottom center"
					/>
				}
				{carousel && 
					<div className={styles.carousel}>
						{/* <SimpleImageSlider
							height={546}
							images={images}
							showBullets={true}
							showNavs={false}
							loop={true}
						/> */}

						<div className="slider">
							<div className="slides">
								{carousel.map((image,idx) => {
									return (
										<div key={idx}  id={'slide-' + idx}>
											<Image
												alt={image.altText}
												src={image.sourceUrl}
												layout="fill"
												objectFit='cover'
											/>
										</div>					
									)
								})}			
							</div>
						</div>
						
						<div id='slider_btns' className="slider_btns">
							{carousel.map((image,idx) => {
								return (
									<Link key={idx} href={'#slide-' + idx} scroll={false}>
										&nbsp;
									</Link>
								)
							})}
						</div>

					</div>
					
				}
				<div className={styles.cover}>
					<div className={styles.wrapper}>
						<div className={styles.logo}>
							<Link href="/" passHref>
								<Image
									alt="Phiphen Studios"
									src={logo}
									layout="responsive"
									width="510"
									height="141"
								/>
							</Link>
						</div>			
						<div className={styles.burger}>
							<Burger navigation={navigation} />
						</div>
						{title && 
							<div className={styles.title}>
								{title}
							</div>
						}					
					</div>
					
				</div>
			</div>

			{carousel && 
			<>
				<div className={styles.carouselMask}>
					<Image 
						alt=''
						src={mask} 
					/>
				</div>
				<div className={styles.carouselMaskExt}></div>
				{quote && <Quote quote={quote} quoteAuthor={quoteAuthor} />}
			</>}

			{headerImage && 
			<div className={styles.decoration}>
				<Image
					alt="Phiphen Studios"
					src={decoration}
					
				/>
			</div>
			}

			{!carousel && 
				<div className={styles.topGap}></div>
			}

			

		</>
	)
}

export default Hero