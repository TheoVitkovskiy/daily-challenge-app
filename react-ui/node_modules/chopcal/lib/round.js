/**
 * Chop to round.
 * @function round
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Round number.
 */
'use strict'

const surplus = require('./surplus')

/** @lends round */
function round (value, base) {
  base = base || 0
  let surplused = surplus(value, base)
  let result = value - surplused
  let enough = (base / 2) < surplused
  if (enough) {
    result += base
  }
  let weight = 1 / base
  return parseInt(result * weight) / weight
}

module.exports = round
