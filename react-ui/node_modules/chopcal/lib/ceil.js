/**
 * Chop to ceil.
 * @function ceil
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Ceil number.
 */
'use strict'

const surplus = require('./surplus')

/** @lends ceil */
function ceil (value, base) {
  base = base || 0
  let surplused = surplus(value, base)
  let result = value - surplused
  let enough = 0 < surplused
  if (enough) {
    result += base
  }
  let weight = 1 / base
  return parseInt(result * weight) / weight
}

module.exports = ceil
