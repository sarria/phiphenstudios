import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/footer.module.scss'
import logo from '../public/PSLogo-footer.png'
import facebookImg from '../public/facebook.png'
import twitterImg from '../public/twitter.png'
import instagramImg from '../public/instagram.png'
import decorationImg from '../public/decoration-footer.png'

const Footer = ({email, telephone, facebook, twitter, instagram}) => {
	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Image
						alt=''
						src={logo}
					/>	
				</div>
				<div className={styles.contact}>
					<div className={styles.email}>
						<Link href={'mailto:' + email}>{email}</Link>
					</div>
					<div className={styles.phone}>
						<Link href={'tel:' + telephone}>{telephone}</Link>
					</div>
				</div>
				{(facebook || twitter || instagram) && 
				<div className={styles.social}>
					{facebook && 
					<div className={styles.facebook}>
						<a href={facebook} target="_blank" rel="noreferrer" >
							<Image
								alt=''
								src={facebookImg}
								
							/>
						</a>
					</div>}
					{twitter &&
					<div className={styles.twitter}>
						<a href={twitter} target="_blank" rel="noreferrer" >
							<Image
								alt=''
								src={twitterImg}
							/>
						</a>
					</div>}
					{instagram && 
					<div className={styles.instagram}>
						<a href={instagram} target="_blank" rel="noreferrer" >
							<Image
								alt=''
								src={instagramImg}
							/>
						</a>
					</div>}
				</div>}
			</div>

			<div className={styles.decoration}>
				<Image
					alt=''
					src={decorationImg}
					width={388}
					height={8}
				/>				
			</div>
		</footer>
	)
}

export default Footer;