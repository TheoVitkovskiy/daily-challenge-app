/**
 * Test case for max.
 * Runs with mocha.
 */
'use strict'

const max = require('../lib/max.js')
const assert = require('assert')

describe('max', function () {
  it('Max', (done) => {
    assert.equal(max(), undefined)
    assert.equal(max(0), 0)
    assert.equal(max(3, 2, 4), 4)
    assert.equal(max([ 3, 2, 4 ]), 4)
    done()
  })
})

/* global describe, it */