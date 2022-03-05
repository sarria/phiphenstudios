import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'
import Dots from './indicator-dots'
import Buttons from './buttons'

import './style.css'

// Main App
class App extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     axis: 'x'
  //   }
  //   this.setAxis = axis => {
  //     return () => this.setState({'axis': axis})
  //   }
  // }
  render () {
    return (
      <div style={{height: '100%'}}>
        {/* <header>
          <span className={this.state.axis === 'x' ? 'axis current' : 'axis'}
            onClick={this.setAxis('x')}>horizontal</span>
          <span className={this.state.axis === 'y' ? 'axis current' : 'axis'}
            onClick={this.setAxis('y')}>vertical</span>
        </header> */}
        <div className="wrapper">
          <Carousel loop auto axis='x' widgets={[Dots, Buttons]} className="custom-class">
            <p style={{backgroundColor: 'royalblue', height: '100%'}}>FRAME 1</p>
            <p style={{backgroundColor: 'orange', height: '100%'}}>FRAME 2</p>
            <p style={{backgroundColor: 'orchid', height: '100%'}}>FRAME 3</p>
            <div style={{backgroundColor: 'yellow', height: '100%'}}>
              <span style={{backgroundColor: 'white'}}>Cool A</span>
            </div>
            <div style={{backgroundColor: 'blue', height: '100%'}}>
              <span style={{backgroundColor: 'white'}}>Cool B</span>
            </div>
          </Carousel>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
