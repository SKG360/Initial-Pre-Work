// Summary Comment - .shift() removes the first element instead of the last from an array.

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];
removedFromMyArray = myArray.shift()
// Only change code below this line.
var removedFromMyArray;
console.log(removedFromMyArray)
