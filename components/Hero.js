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
import SimpleImageSlider from "react-simple-image-slider"; 
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

// https://www.npmjs.com/package/react-simple-image-slider

function Hero({title, headerImage, navigation, carousel, quote, quoteAuthor}) {
	const cx = classNames.bind(styles);

	const images = !carousel ? [] : carousel.map(image => {
		return { url: image.sourceUrl }
	})

	const galleryItems = !carousel ? [] : carousel.map((image,idx) => {
		return (
					
			<Image
				key={idx}
				alt=""
				src={image.sourceUrl}
				layout="responsive"
				width="500"
				height="500"
			/>	
		)
	})

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
						<SimpleImageSlider
							height={546}
							images={images}
							showBullets={true}
							showNavs={false}
							loop={true}
						/>
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

			<AliceCarousel
				items={galleryItems}
				responsive={{
					0: { items: 1 },
					1024: { items: 2 },
				  }}
				autoPlayInterval={2000}
				autoPlayDirection="rtl"
				autoPlay={true}
				fadeOutAnimation={true}
				mouseTrackingEnabled={true}
				disableAutoPlayOnAction={true}
			/>
		</>
	)
}

export default Hero