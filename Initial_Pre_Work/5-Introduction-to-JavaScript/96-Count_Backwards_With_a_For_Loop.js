// Summary Comment - A for loop can also count backwards. In order to count backwards
// change the initialization, condition, and final-expression.

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];
// Only change code below this line.
for (var i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
console.log(myArray)
