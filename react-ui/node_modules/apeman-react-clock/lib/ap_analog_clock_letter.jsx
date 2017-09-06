/**
 * A letter for analog clock.
 * @class ApAnalogClockLetter
 */

'use strict'

import React, {PropTypes as types} from 'react'

/** @lends ApAnalogClockLetter */
const ApAnalogClockLetter = React.createClass({
  propTypes: {
    angle: types.number,
    letter: types.string
  },
  getDefaultProps () {
    return {
      angle: 0,
      letter: ''
    }
  },
  render () {
    const s = this
    let { props } = s

    let { angle, letter } = props

    let containerStyle = { transform: `rotate(${angle}deg)` }
    let letterStyle = { transform: `rotate(${angle * -1}deg)` }
    return (
      <span className="ap-analog-letter"
            style={ containerStyle }>
                    <span className="ap-analog-letter-title" style={ letterStyle }>{ letter }</span>
                </span>
    )
  }
})

export default ApAnalogClockLetter
