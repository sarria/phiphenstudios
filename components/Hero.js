import Image from 'next/image'
import Burger from './burger'
import Link from 'next/link'
import styles from './hero.module.scss'
import logo from '../public/PSLogo.png'
import decoration from '../public/decoration.png'

function Hero({title, headerImage, navigation}) {

	return (
		<>
			<div className={styles.root}>
				<Image
					alt={headerImage.altText}
					src={headerImage.sourceUrl}
					layout="fill"
					objectFit="cover"
					objectPosition="bottom center"
				/>
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
						<div className={styles.title}>
							{title}
						</div>						
					</div>
					
				</div>
			</div>
			<div className={styles.decoration}>
				<Image
					alt="Phiphen Studios"
					src={decoration}
					
				/>
			</div>
			
		</>
	)
}

export default Hero