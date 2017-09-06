/**
 * Style for ApClock.
 * @class ApClockStyle
 */

'use strict'

import React, {PropTypes as types} from 'react'
import {ApStyle} from 'apeman-react-style'

/** @lends ApClockStyle */
const ApClockStyle = React.createClass({
  propTypes: {
    style: types.object
  },
  getDefaultProps () {
    return {
      style: {}
    }
  },
  statics: {
    styleData (config) {
      return {
        all: {}
      }
    }
  },
  render () {
    const s = this
    let { props } = s

    let { all, small, medium, large } = ApClockStyle.styleData(props)

    return (
      <ApStyle data={ Object.assign(all, props.style) }
               smallMediaData={ small }
               mediumMediaData={ medium }
               largeMediaData={ large }
      >{ props.children }</ApStyle>
    )
  }
})

export default ApClockStyle
