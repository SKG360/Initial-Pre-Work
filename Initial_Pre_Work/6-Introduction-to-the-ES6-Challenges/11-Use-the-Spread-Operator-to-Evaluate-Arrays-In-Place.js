// Summary Comment - Math.max(arr) returns NaN. Math.max() expects comma-separated
// arguments, but not an array.
//
// ...arr returns an unpacked array. In other words, it spreads the array.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
