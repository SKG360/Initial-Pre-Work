// Summary Comment - the return value of a function can be assigned to a variable.

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Only change code below this line
