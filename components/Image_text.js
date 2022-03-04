import parse from 'html-react-parser';
import Image from 'next/image'
import cx from 'classnames';
import styles from './image_text.module.scss'

const Image_text = ({data}) => {
	
	return (
		<div className={styles.root}>
			
				{data.map((item, idx) => {

					return (
					<div key={idx}>
						<div className={styles.raw}>
							<div className={styles.column_12}>
								<div className={styles.column_12B}>
									<div className={`ratio_container $(styles.ratio_container)`}>
										<div className={`outer ${styles.image_ratio}`}>
											<div className={`inner ${styles.inner}`}>
												<Image
													alt={item.image.altText}
													src={item.image.sourceUrl}
													layout="fill"
													objectFit="cover"
													objectPosition="top center"
												/>											
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.column_34}>
								<div className={styles.text_wrapper}>
									{parse(item.text)}
								</div>
							</div>
							<div className={styles.column_5}>
								5
							</div>	
						</div>
					</div>
				)
				})}

			
			
		</div>
	)
}

export default Image_text;