// Summary Comment - The rest operator eliminates the need to check the args array
// and allows us to apply map(), filter() and reduce() on the parameters array.

//i think this requires (...args) ??
const sum = (function () {
  "use strict";
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
