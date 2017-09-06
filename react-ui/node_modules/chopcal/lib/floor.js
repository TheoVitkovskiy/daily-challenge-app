/**
 * Chop to floor.
 * @function floor
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Floor number.
 */
'use strict'

const surplus = require('./surplus')

/** @lends floor */
function floor(value, base) {
    base = base || 0;
    let surplused = surplus(value, base)
    let result = value - surplused;
    let weight = 1 / base;
    return parseInt(result * weight) / weight;
}

module.exports = floor;
