
import Hero from './Hero'

const Carousel = ({data, navigation}) => {
	return <Hero carousel={data.carousel} quote={data.quote} quoteAuthor={data.quoteAuthor} navigation={navigation} />
}

export default Carousel;