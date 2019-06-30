// Summary Comment - ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x.
// Write x once, and it will be converted tox: x (or something equivalent) under the hood.

// ---- Original ----
// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });
//
// ---- Syntactic Sugar ----
// const getMousePosition = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
 (name, age, gender);

  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
