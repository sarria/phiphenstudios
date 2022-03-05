import Image from 'next/image'
import styles from './styles/footer.module.scss'
import footerImg from '../public/footer.png'

const Footer = () => {
	return (
		<footer className={styles.root}>
			<div className={styles.wrapper}>
				<Image
					alt=''
					src={footerImg}
					// layout="fill"
				/>											
			</div>
		</footer>
	)
}

export default Footer;