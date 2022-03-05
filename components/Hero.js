import Image from 'next/image'
import Burger from './burger'
import Quote from "./Quote"
// import parse from 'html-react-parser';
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './styles/hero.module.scss'
import logo from '../public/PSLogo.png'
import decoration from '../public/decoration.png'
import SimpleImageSlider from "react-simple-image-slider"; // https://www.npmjs.com/package/react-simple-image-slider

function Hero({title, headerImage, navigation, carousel, quote, quoteAuthor}) {

	console.log('quote',quote)

	const cx = classNames.bind(styles);

	const images = !carousel ? [] : carousel.map(image => {
		return { url: image.sourceUrl }
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

				</div>
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
		</>
	)
}

export default Hero