/**
 * Test case for ceil.
 * Runs with mocha.
 */
'use strict'

const ceil = require('../lib/ceil.js')
const assert = require('assert')

it('Ceil', (done) => {
  assert.equal(ceil(12, 10), 20)
  assert.equal(ceil(10, 10), 10)
  assert.equal(ceil(0.21, 0.1), 0.3)
  done()
})

