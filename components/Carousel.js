import Slider from './carousel/carousel'
import Dots from './carousel/indicator-dots'
import Buttons from './carousel/buttons'
import styles from './styles/carousel.module.scss'

const Carousel = ({data}) => {
	console.log('Carousel', data)

	return  (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<Slider loop auto axis='x' widgets={[Dots, Buttons]} className={styles.item}>
					<p style={{backgroundColor: 'royalblue', height: '100%'}}>FRAME 1</p>
					<p style={{backgroundColor: 'orange', height: '100%'}}>FRAME 2</p>
					<p style={{backgroundColor: 'orchid', height: '100%'}}>FRAME 3</p>
					<div style={{backgroundColor: 'yellow', height: '100%'}}>
					<span style={{backgroundColor: 'white'}}>Cool A</span>
					</div>
					<div style={{backgroundColor: 'blue', height: '100%'}}>
					<span style={{backgroundColor: 'white'}}>Cool B</span>
					</div>
				</Slider>
			</div>
			
		</div>
	)
}

export default Carousel;