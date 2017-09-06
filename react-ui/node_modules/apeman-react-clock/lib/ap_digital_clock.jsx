/**
 * Digital clock
 * @class ApDigitalLock
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

import ReactDOM from 'react-dom'
import ApClock from './ap_clock'
import ApDigitalClockMainDisplay from './ap_digital_clock_main_display'
import ApDigitalClockSubDisplay from './ap_digital_clock_sub_display'
import moment from 'moment'
import {ApPureMixin} from 'apeman-react-mixin-pure'
import numcal from 'numcal'

/** @lends ApDigitalLock */
const ApDigitalLock = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {
    showSeconds: types.bool
  },

  mixins: [
    ApPureMixin
  ],

  statics: {
    padZero (value, len) {
      let result = String(value)
      while (result.length < len) {
        result = '0' + result
      }
      return result
    }
  },

  getInitialState () {
    return {
      hours: '00',
      minutes: '00',
      seconds: '00',
      size: 256,
      labelWidth: 256
    }
  },

  getDefaultProps () {
    return {
      showSeconds: true
    }
  },

  render () {
    const s = this
    let { state, props } = s

    let size = state.size

    let mainFontSize = parseInt(size * 0.2)
    let subFontSize = mainFontSize / 4

    let boardStyle = {
      width: `${size}px`,
      height: `${size}px`
    }

    return (
      <ApClock className={ classnames('ap-digital-clock', props.className) }>
        <div className="ap-digital-clock-board" style={boardStyle}>
          <div className="ap-digital-clock-dummy-text"
               style={ {lineHeight: `${size}px`} }
          >&nbsp;
          </div>
          <div className="ap-digital-clock-board-inner">
            <ApDigitalClockMainDisplay hours={state.hours}
                                       minutes={state.minutes}
                                       seconds={state.seconds}
                                       fontSize={mainFontSize}
                                       onSizeChange={s.onMainDisplaySizeChange}
            />
            <ApDigitalClockSubDisplay day={state.day}
                                      width={state.labelWidth}
                                      fontSize={subFontSize}
            />
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

    let padZero = ApDigitalLock.padZero

    function _loop () {
      if (!s._looping) {
        return
      }
      let now = new Date()

      s.setState({
        hours: padZero(now.getHours(), 2),
        minutes: padZero(now.getMinutes(), 2),
        seconds: padZero(now.getSeconds(), 2),
        day: moment(now).format('LL')
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
  },

  onMainDisplaySizeChange (sizes) {
    const s = this
    s.setState({
      labelWidth: sizes.innerWidth
    })
  }

})

export default ApDigitalLock
