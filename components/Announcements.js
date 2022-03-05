import Image from 'next/image'
import cx from 'classnames';
import styles from './styles/announcements.module.scss'

const Announcements = ({data}) => {
	
	console.log('Announcements data', data);

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				{data.label && 
				<div className={styles.label}>
					{data.label}
				</div>}
			</div>
		</div>
	)
	
}

export default Announcements;