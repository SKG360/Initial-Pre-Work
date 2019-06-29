// Summary Comment - objects (including arrays and functions) assigned to a variable using const are still mutable.
// Using the const declaration only prevents reassignment of the variable identifier.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid
return s
  // change code above this line
}
editInPlace();
console.log(editInPlace());
