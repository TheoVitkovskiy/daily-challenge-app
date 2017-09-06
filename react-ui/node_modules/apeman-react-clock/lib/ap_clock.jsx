/**
 * Abstract clock.
 * @class ApClock
 */

'use strict'

import React, {PropTypes as types} from 'react'
import classnames from 'classnames'

/** @lends ApClock */
const ApClock = React.createClass({

  // --------------------
  // Specs
  // --------------------

  propTypes: {},

  mixins: [],

  statics: {},

  getInitialState () {
    return {}
  },

  getDefaultProps () {
    return {}
  },

  render () {
    const s = this,
      { props } = s

    return (
      <div className={ classnames("ap-clock", props.className) }>
        { props.children }
      </div>
    )
  },

  // --------------------
  // Lifecycle
  // --------------------

  // ------------------
  // Helper
  // ------------------

  // ------------------
  // Private
  // ------------------
})

export default ApClock
