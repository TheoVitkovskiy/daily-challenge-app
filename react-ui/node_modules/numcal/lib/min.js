/**
 * Find min value.
 * @function min
 * @param {...number} values - Values to compare.
 * @returns {number} - Min number.
 */


'use strict'

/** @lends min */
function min () {
  let args = arguments
  let result = undefined
  for (let i = 0, len = args.length; i < len; i++) {
    let val = args[ i ]
    if (Array.isArray(val)) {
      val = min(...val)
    }
    let hit = (result === undefined) || (val < result)
    if (hit) {
      result = val
    }
  }
  return result
}

module.exports = min

