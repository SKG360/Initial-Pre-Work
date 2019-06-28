// Summary Comment - The most common type of JavaScript loop is called a "for loop"
// because it runs "for" a specific number of times.
//
// for ([initialization]; [condition]; [final-expression])

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];
for (var i = 1; i <= 5; i+=1) {
    myArray.push(i);
}

console.log(myArray)
// Only change code below this line.
