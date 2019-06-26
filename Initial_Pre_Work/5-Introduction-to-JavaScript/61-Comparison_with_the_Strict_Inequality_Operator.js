// Summary Comment - The strict inequality operator (!==) is the logical opposite of the strict
// equality operator. It means "Strictly Not Equal" and returns false where strict equality
// would return true and vice versa. Strict inequality will not convert data types.

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));
