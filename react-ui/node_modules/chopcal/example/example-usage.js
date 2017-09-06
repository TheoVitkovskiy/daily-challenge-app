"use strict";

const chopcal = require('chopcal')

//------------------------
// ceil
//------------------------
console.log(chopcal.ceil(14, 10)) //-> 20
console.log(chopcal.ceil(16, 10)) //-> 20
console.log(chopcal.ceil(0.23, 0.1)) //-> 0.3
console.log(chopcal.ceil(0.27, 0.1)) //-> 0.3

//------------------------
// floor
//------------------------
console.log(chopcal.floor(14, 10)) //-> 10
console.log(chopcal.floor(16, 10)) //-> 10
console.log(chopcal.floor(0.23, 0.1)) //-> 0.2
console.log(chopcal.floor(0.27, 0.1)) //-> 0.2

//------------------------
// round
//------------------------
console.log(chopcal.round(14, 10)) //-> 10
console.log(chopcal.round(16, 10)) //-> 20
console.log(chopcal.round(0.23, 0.1)) //-> 0.2
console.log(chopcal.round(0.27, 0.1)) //-> 0.3

