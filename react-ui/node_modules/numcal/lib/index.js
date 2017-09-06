/**
 * Basic numeric calculation functions.
 * @module numcal
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get ave () { return d(require('./ave')) },
  get max () { return d(require('./max')) },
  get min () { return d(require('./min')) },
  get sum () { return d(require('./sum')) }
}
