/**
 * Analog clock.
 * @class ApAnalogClock
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'
import ReactDOM from 'react-dom'
import ApClock from './ap_clock'
import {ApPureMixin} from 'apeman-react-mixin-pure'
import chopcal from 'chopcal'
import numcal from 'numcal'
import ApAnalogClockHand from './ap_analog_clock_hand'
import ApAnalogClockLetter from './ap_analog_clock_letter'

/** @lends ApAnalogClock */
const ApAnalogClock = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    boardLetters: types.array
  },

  mixins: [
    ApPureMixin
  ],

  statics: {
    _angleForValue (value, max) {
      let rate = (value % max) / max
      return chopcal.round(rate * 360, 0.1)
    },
    hourHandAngle (date) {
      let hours = date.getHours()
      return ApAnalogClock._angleForValue(hours, 12)
    },
    minuteHandAngle (date) {
      let minutes = date.getMinutes()
      return ApAnalogClock._angleForValue(minutes, 60)
    },
    secondHandAngle (date) {
      let seconds = date.getSeconds()
      return ApAnalogClock._angleForValue(seconds, 60)
    },
    letterAngle (i, count) {
      return ApAnalogClock._angleForValue(i, count)
    }
  },

  getInitialState () {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      size: 256
    }
  },

  getDefaultProps () {
    return {
      boardLetters: '12,1,2,3,4,5,6,7,8,9,10,11'.split(',')
    }
  },

  render () {
    const s = this
    let { state, props } = s

    let letters = props.boardLetters.map((letter, i, letters) => {
      let angle = ApAnalogClock.letterAngle(i, letters.length)
      return (
        <ApAnalogClockLetter key={ `ap-analog-letter-` + i }
                             letter={ letter }
                             angle={ angle }/>
      )
    })

    let size = state.size

    let boardStyle = {
      width: size,
      height: size
    }

    let screwSize = 9

    return (
      <ApClock className={ classnames("ap-analog-clock", props.className) }>
        <div className="ap-analog-clock-board" style={boardStyle}>
          <div className="ap-analog-clock-board-inner">
            <ApAnalogClockHand className="ap-analog-clock-hand-hour" width={ 4 } heightRate={ 0.8 }
                               angle={ state.hour }/>
            <ApAnalogClockHand className="ap-analog-clock-hand-minute" width={ 4 } heightRate={ 0.95 }
                               angle={ state.minute }/>
            <ApAnalogClockHand className="ap-analog-clock-hand-second" width={ 2 } heightRate={ 1 }
                               angle={ state.second }/>
          </div>
          <div>
            {letters}
          </div>
          <div className="ap-analog-clock-screw-container">
            <div className="ap-analog-clock-screw"
                 style={ {width: screwSize, height: screwSize, bottom: -screwSize / 2} }
                 ref="screw"></div>
          </div>
        </div>
      </ApClock>
    )
  },

  // --------------------
  // Lifecycle
  // --------------------

  componentWillMount () {
    const s = this
    s._looping = true
  },

  componentDidMount () {
    const s = this
    let { props } = s

    function _loop () {
      if (!s._looping) {
        return
      }
      let now = new Date()
      s.setState({
        hour: ApAnalogClock.hourHandAngle(now),
        minute: ApAnalogClock.minuteHandAngle(now),
        second: ApAnalogClock.secondHandAngle(now)
      })
      window.requestAnimationFrame(_loop)
    }

    window.addEventListener('resize', s.resizeClock)
    _loop()
    s.resizeClock()
  },

  componentWillUnmount () {
    const s = this
    window.removeEventListener('resize', s.resizeClock)
    s._looping = false
  },

  // ------------------
  // Helper
  // ------------------

  resizeClock () {
    const s = this
    let elm = ReactDOM.findDOMNode(s)
    let size = numcal.min(elm.offsetWidth, elm.offsetHeight)
    s.setState({
      size: size
    })
  }
  // ------------------
  // Private
  // ------------------
})

export default ApAnalogClock
