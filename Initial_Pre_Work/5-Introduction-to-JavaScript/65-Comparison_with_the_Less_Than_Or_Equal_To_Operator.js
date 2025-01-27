// Summary Comment - The less than or equal to operator (<=) compares the values of two numbers.
// If the number to the left is less than or equal to the number to the right, it returns true.
// If the number on the left is greater than the number on the right, it returns false.
// Like the equality operator, less than or equal to converts data types.

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
console.log(testLessOrEqual(33));
