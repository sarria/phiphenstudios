import Image from 'next/image'
import styles from './styles/footer.module.scss'
import footerImgDesktop from '../public/footer.png'
import footerImgMobile from '../public/footer-mobile.png'

const Footer = () => {
	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.desktop}>
					<Image
						alt=''
						src={footerImgDesktop}
					/>	
				</div>
				<div className={styles.mobile}>
					<Image
						alt=''
						src={footerImgMobile}
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer;