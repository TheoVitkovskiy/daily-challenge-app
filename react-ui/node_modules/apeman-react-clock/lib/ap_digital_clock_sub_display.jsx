/**
 * Sub display for digital clock
 * @class ApDigitalClockSubDisplay
 */

'use strict'

import React, {PropTypes as types} from 'react'

/** @lends ApDigitalClockSubDisplay */
const ApDigitalClockSubDisplay = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    day: types.string,
    fontSize: types.number,
    width: types.number
  },

  render () {
    const s = this
    let { props } = s

    let { fontSize, width } = props

    let displayStyle = {
      fontSize: `${fontSize}px`
    }, labelStyle = {
      width: `${width}px`
    }

    return (
      <div className="ap-digital-clock-sub-display" style={ displayStyle }>
        <div className="ap-digital-clock-sub-label" style={ labelStyle }>
          <span>{props.day}</span>
        </div>
      </div>
    )
  }
})

export default ApDigitalClockSubDisplay
