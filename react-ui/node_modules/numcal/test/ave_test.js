/**
 * Test case for ave.
 * Runs with mocha.
 */
'use strict'

const ave = require('../lib/ave.js')
const assert = require('assert')

describe('ave', function * () {
  it('Ave', (done) => {
    assert.equal(ave(1, 4, 4), 3)
    assert.equal(ave([ 1, 4, 4 ]), 3)
    done()
  })
})

/* global describe, it */
