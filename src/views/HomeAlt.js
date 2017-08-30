import React, { Component } from 'react'
import Clock from 'react-live-clock'
import { ApAnalogClock, ApAnalogClockStyle } from 'apeman-react-clock'

class HomeAlt extends Component {
  render() {
    return (
      <div>

        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2em'}}>
          <ApAnalogClockStyle scoped width='400px' height='300px' />
          <ApAnalogClock />
        </div>
      </div>
    )
  }
}

export default HomeAlt
