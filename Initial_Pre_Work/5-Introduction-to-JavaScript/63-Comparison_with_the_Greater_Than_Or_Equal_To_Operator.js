// Summary Comment - The greater than or equal to operator (>=) compares the values of
// two numbers. If the number to the left is greater than or equal to the number to the right,
// it returns true. Otherwise, it returns false.
//
// Like the equality operator, greater than or equal to operator will convert data types while comparing.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(20));
