'use strict'

import React from 'react'
import {ApAnalogClock, ApAnalogClockStyle} from 'apeman-react-clock'

const ExampleComponent = React.createClass({
  render () {
    return (
      <div>
        <ApAnalogClockStyle scoped />
        <ApAnalogClock />
      </div>
    )
  }
})
