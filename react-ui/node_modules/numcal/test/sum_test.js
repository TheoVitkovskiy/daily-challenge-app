/**
 * Test case for sum.
 * Runs with mocha.
 */
'use strict'

const sum = require('../lib/sum.js')
const assert = require('assert')

describe('sum', function () {
  it('Sum', (done) => {
    assert.equal(sum(3, 1, 4), 8)
    assert.equal(sum([ 3, 1, 4 ]), 8)
    done()
  })
})

/* global describe, it */
