// Summary Comment - If the values being compared are not of the same type, the equality
// operator will perform a type conversion, and then evaluate the values. However, the strict
// equality operator will compare both the data type and value as-is, without converting one type to the other.

// To determine the type of a variable or a value use the typeof operator.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
