import parse from 'html-react-parser';
import styles from './label.module.scss'

const Label = ({data}) => {

	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				{parse(data.label)}
			</div>
		</div>
	)
}

export default Label;