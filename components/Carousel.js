
import Hero from './Hero'

// https://github.com/amio/re-carousel/

const Carousel = ({carousel, navigation}) => {
	console.log('Carousel', carousel, navigation)
	return <Hero carousel={carousel} navigation={navigation} />
}

export default Carousel;