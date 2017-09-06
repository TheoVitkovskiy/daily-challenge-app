/**
 * Test case for surplus.
 * Runs with mocha.
 */
'use strict'

const surplus = require('../lib/surplus.js')
const assert = require('assert')

it('Surplus', (done) => {
  assert.equal(surplus(12, 10), 2)
  assert.equal(surplus(0.23, 0.1), 0.03)
  done()
})

