import Image from 'next/image'
import cx from 'classnames';
import styles from './styles/images.module.scss'

const Images = ({data}) => {
	const images = data.images
	console.log('Images', images);

	return data?.images && (
		<div className={styles.root}>
			<div className={cx(styles.wrapper, styles['qty_'+images.length])}>
				{images.map((item, idx) => {

					return item.image && (
					<div key={idx} className={styles.image}>
						<div className={`ratio_container ${styles.ratio_container}`}>
							<div className={`outer ${styles.image_ratio}`}>
								<div className={`inner ${styles.inner}`}>
									<Image
										alt={item.image.altText}
										src={item.image.sourceUrl}
										layout="fill"
										objectFit="cover"
									/>											
								</div>
							</div>
						</div>
					</div>
					)
				})}
			</div>
			
		</div>
	)
}

export default Images;