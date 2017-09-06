/**
 * Chop numbers.
 * @module chopcal
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ceil () { return d(require('./ceil')) },
  get floor () { return d(require('./floor')) },
  get round () { return d(require('./round')) },
  get surplus () { return d(require('./surplus')) }
}
