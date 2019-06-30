// Summary Comment - One key difference between the spread operator and array destructuring
// is that the spread operator unpacks all contents of an array into a comma-separated list.

// No need of const [b,a] as it will keep the effect of assignment local.
//
// const [b,a] = [a,b] will result in the value of a,b as undefined(simple assignment rule left to right).

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [b, a] = [a, b]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
