/**
 * Find max value.
 * @function max
 * @param {...number} values - Values to compare.
 * @returns {number} - Max number.
 */


'use strict'

/** @lends max */
function max () {
  let args = arguments
  let result = undefined
  for (let i = 0, len = args.length; i < len; i++) {
    let val = args[ i ]
    if (Array.isArray(val)) {
      val = max(...val)
    }
    let hit = (result === undefined) || (val > result)
    if (hit) {
      result = val
    }
  }
  return result
}

module.exports = max

