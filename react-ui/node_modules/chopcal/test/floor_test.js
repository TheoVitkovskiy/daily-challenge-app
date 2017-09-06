/**
 * Test case for floor.
 * Runs with mocha.
 */
'use strict'

const floor = require('../lib/floor.js')
const assert = require('assert')

it('Floor', (done) => {
  assert.equal(floor(12, 10), 10)
  assert.equal(floor(10, 10), 10)
  assert.equal(floor(0.21, 0.1), 0.2)
  done()
})

