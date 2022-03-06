import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser';
import styles from './styles/announcements.module.scss'

const Announcements = ({data}) => {
	
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				{data.label && 
				<div className={styles.label}>
					{data.label}
				</div>}

				<div className={styles.cards}>
				{data.cards.map((card, idx) => {
					return (
						<div key={idx} className={styles.card}>
							<div className={styles.image}>
								<div className={`ratio_container ${styles.ratio_container}`}>
									<div className={`outer ${styles.image_ratio}`}>
										<div className={`inner ${styles.inner}`}>
											<Image
												alt={card.image.altText}
												src={card.image.sourceUrl}
												layout="fill"
												objectFit="cover"
											/>											
										</div>
									</div>
								</div>
							</div>
							<div className={styles.text}>
								{parse(card.text)}
							</div>
						</div>
					)
				})}
				</div>
			</div>
		</div>
	)
	
}

export default Announcements;