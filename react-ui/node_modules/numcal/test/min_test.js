/**
 * Test case for min.
 * Runs with mocha.
 */
'use strict'

const min = require('../lib/min.js')
const assert = require('assert')

describe('min', function () {
  it('Min', (done) => {
    assert.equal(min(), undefined)
    assert.equal(min(0), 0)
    assert.equal(min(3, 2, 4), 2)
    assert.equal(min([ 3, 2, 4 ]), 2)
    done()
  })
})

/* global describe, it */

