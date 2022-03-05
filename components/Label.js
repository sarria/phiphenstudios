import parse from 'html-react-parser';
import styles from './styles/label.module.scss'

const Label = ({data}) => {

	return data?.label && (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<h2>{parse(data.label)}</h2>
			</div>
		</div>
	)
}

export default Label;