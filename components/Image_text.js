import parse from 'html-react-parser';
import Image from 'next/image'
import cx from 'classnames';
import styles from './styles/image_text.module.scss'

const Image_text = ({data}) => {
	
	return data?.imageText && (
		<div className={cx(styles.root, styles[data.layout])}>
			<div className={styles.separator}></div>
			{data.imageText.map((item, idx) => {
				const row_layout = idx % 2;
				return (
				<div key={idx} className={styles['row_'+row_layout]}>
					<div className={styles.row}>
						<div className={styles.column_12}>
							<div className={styles.column_12B}>
								<div className={`ratio_container ${styles.ratio_container}`}>
									<div className={`outer ${styles.image_ratio}`}>
										<div className={`inner ${styles.inner}`}>
											{item.image && 
											<Image
												alt={item.image.altText}
												src={item.image.sourceUrl}
												layout="fill"
												objectFit="cover"
												objectPosition="top center"
											/>}
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
					</div>
					<div className={styles.separator}></div>
				</div>
			)
			})}
		</div>
	)
}

export default Image_text;