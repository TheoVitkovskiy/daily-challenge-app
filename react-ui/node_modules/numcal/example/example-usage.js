'use strict'

const numcal = require('numcal')

//------------------------
// min
//------------------------
console.log(numcal.min(3, 2, 4)) //-> 2
console.log(numcal.min([3, 2, 4])) //-> 2

//------------------------
// max
//------------------------
console.log(numcal.max(3, 2, 4)) //-> 4
console.log(numcal.max([3, 2, 4])) //-> 4

//------------------------
// sum
//------------------------
console.log(numcal.sum(3, 2, 4)) //-> 9
console.log(numcal.sum([3, 2, 4])) //-> 9

//------------------------
// ave
//------------------------
console.log(numcal.ave(3, 2, 4)) //-> 3
console.log(numcal.ave([3, 2, 4])) //-> 3

