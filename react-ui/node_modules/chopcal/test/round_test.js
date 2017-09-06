/**
 * Test case for round.
 * Runs with mocha.
 */
'use strict'

const round = require('../lib/round.js')
const assert = require('assert')

it('Round', (done) => {
  assert.equal(round(16, 10), 20)
  assert.equal(round(12, 10), 10)
  assert.equal(round(10, 10), 10)
  assert.equal(round(0.21, 0.1), 0.2)
  done()
})

