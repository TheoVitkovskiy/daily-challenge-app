/**
 * Get surplus.
 * @function surplus
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Surplus number.
 */
'use strict'

/** @lends surplus */
function surplus (value, base) {
  base = base || 0
  return value - (parseInt(value / base) * base)
}

module.exports = surplus
