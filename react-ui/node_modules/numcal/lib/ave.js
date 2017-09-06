/**
 * Get average value.
 * @function ave
 * @param {...number} values - Values to ave.
 * @returns {number} - Average value.
 */


'use strict'

const sum = require('./sum')

/** @lends ave */
function ave () {
  let args = arguments
  let values = 0, size = 0
  for (let i = 0, len = args.length; i < len; i++) {
    let val = args[ i ]
    if (Array.isArray(val)) {
      size += val.length
      val = sum(...val)
    } else {
      size += 1
    }
    values += val
  }
  return values / size
}

module.exports = ave
