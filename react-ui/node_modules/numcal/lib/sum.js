/**
 * Get sum value.
 * @function sum
 * @param {...number} values - Values to sum.
 * @returns {number} - Sum value.
 */


'use strict'

/** @lends sum */
function sum () {
  let args = arguments;
  let result = 0;
  for (let i = 0, len = args.length; i < len; i++) {
    let val = args[ i ]
    if (Array.isArray(val)) {
      val = sum(...val)
    }
    result += val
  }
  return result
}

module.exports = sum

