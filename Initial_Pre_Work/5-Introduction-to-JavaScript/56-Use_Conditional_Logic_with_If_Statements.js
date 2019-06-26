// Summary Comment - The keyword if tells JavaScript to execute the code in the curly
// braces under certain conditions, defined in the parentheses. These conditions are
// known as Boolean conditions and they may only be true or false.

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true"
  }
  return "No, that was false"

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);
