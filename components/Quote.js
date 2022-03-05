import parse from 'html-react-parser';
import styles from './styles/quote.module.scss'

const Quote = ({quote, quoteAuthor}) => {

	return quote && (
		<div className={styles.root}>
			<div className={styles.wrapper}>

				{parse(quote)}

				{quoteAuthor && 
				<div className={styles.quoteAuthor}>
					<strong>{parse(quoteAuthor)}</strong>
				</div>}
			</div>
			
		</div>
	)
}

export default Quote;