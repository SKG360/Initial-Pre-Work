// Summary Comment - syntactic sugar is syntax within a programming language that is
// designed to make things easier to read or to express.

// ----- Step 1
// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }
//
// ----- Step 2
// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// }
//
// ----- Step 3
// const myFunc = () => "value"

const magic = () => {
  "use strict";
  return new Date();
};
