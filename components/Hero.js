import Image from 'next/image'
import Burger from './burger'
import Quote from "./Quote"
// import parse from 'html-react-parser';
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './styles/hero.module.scss'
import logo from '../public/PSLogo.png'
import decoration from '../public/decoration.png'
import mask from '../public/mask.png'
// import SimpleImageSlider from "react-simple-image-slider"; 
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
// https://www.npmjs.com/package/react-simple-image-slider

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// // https://www.npmjs.com/package/react-responsive-carousel

// import Carousel from 'nuka-carousel';
// https://openbase.com/js/nuka-carousel
// https://codesandbox.io/s/silly-rosalind-6y7f3



function Hero({title, headerImage, navigation, carousel, quote, quoteAuthor}) {
	const cx = classNames.bind(styles);

	// const images = !carousel ? [] : carousel.map(image => {
	// 	return { url: image.sourceUrl }
	// })

	return (
		<>
			<div className={cx(styles.root, {isCarousel: carousel})}>
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
						
						{/* <Carousel width={1366} infiniteLoop={true} dynamicHeight={true}>
							{carousel.map((image,idx) => {
								return (
									<div key={idx}>
										<Image
											alt={image.altText}
											src={image.sourceUrl}
											// layout="fill"
											// objectFit='cover'
											layout="responsive"
											width={image.mediaDetails.width}
											height={image.mediaDetails.height}
											objectFit='cover'											
										/>
									</div>					
								)
							})}
						</Carousel> */}

						{/* <Carousel initialSlideHeight='546'>
							{carousel.map((image,idx) => {
								return (
									<div key={idx}>
										<Image
											alt={image.altText}
											src={image.sourceUrl}
											// layout="fill"
											// objectFit='cover'
											// layout="responsive"
											width={image.mediaDetails.width}
											height={image.mediaDetails.height}
											objectFit='cover'											
										/>
									</div>					
								)
							})}
						</Carousel> */}

						<div className="slider">
							<div className="slides">
								{/* <div id="slide-1">1</div>
								<div id="slide-2">2</div>
								<div id="slide-3">3</div>
								<div id="slide-4">4</div>
								<div id="slide-5">5</div> */}
								{carousel.map((image,idx) => {
									return (
										<div key={idx}  id={'slide-' + idx}>
											<Image
												alt={image.altText}
												src={image.sourceUrl}
												layout="fill"
												objectFit='cover'
												
												// width={image.mediaDetails.width}
												// height={image.mediaDetails.height}
												// objectFit='cover'						
											/>
										</div>					
									)
								})}								
							</div>
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

			<Link href="#slide-0" scroll={false}>
				<a>0</a>
			</Link>
			<Link href="#slide-1" scroll={false}>
				<a>1</a>
			</Link>
			<Link href="#slide-2" scroll={false}>
			<a>2</a>
			</Link>
			<Link href="#slide-3" scroll={false}>
			<a>3</a>
			</Link>
			<Link href="#slide-4" scroll={false}>
			<a>4</a>
			</Link>
			<Link href="#slide-5" scroll={false}>
			<a>5</a>
			</Link>
		</>
	)
}

export default Hero