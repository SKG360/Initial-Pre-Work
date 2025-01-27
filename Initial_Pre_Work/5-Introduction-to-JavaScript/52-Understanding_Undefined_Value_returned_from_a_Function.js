// Summary Comment - A function can include the return statement but it does not have to.
// In the case that the function doesn't have a return statement, the function processes
// the inner code but the returned value is undefined.

// --------

// Create a function addFive without any arguments. This function adds 5 to
// the sum variable, but its returned value is undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
