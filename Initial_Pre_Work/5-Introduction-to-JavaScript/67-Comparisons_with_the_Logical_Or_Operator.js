// Summary Comment - The logical or operator (||) returns true if either of the operands
// is true. Otherwise, it returns false.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
console.log(testLogicalOr(25));
