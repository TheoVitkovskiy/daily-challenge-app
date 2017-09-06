/**
 * A hand for analog clock.
 * @class ApAnalogClockHand
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

/** @lends ApAnalogClockHand */
const ApAnalogClockHand = React.createClass({
  propTypes: {
    angle: types.number,
    width: types.number,
    heightRate: types.number
  },
  getDefaultProps () {
    return {
      angle: 0,
      width: 24,
      heightRate: 1
    }
  },
  render () {
    const s = this,
      { props } = s

    let className = props.className,
      angle = props.angle,
      heightRate = props.heightRate,
      width = props.width;

    return (
      <div className={ classnames("ap-analog-clock-hand", className)}
           style={ {transform: `rotate(${angle}deg)`} }>
        <div className="ap-analog-clock-hand-bar-container"
             style={ {top: `${(1 - heightRate) * 100}%`} }>
          <div className="ap-analog-clock-hand-bar"
               style={ {width: `${width}px`} }></div>
        </div>
      </div>
    )
  }
})

export default ApAnalogClockHand
