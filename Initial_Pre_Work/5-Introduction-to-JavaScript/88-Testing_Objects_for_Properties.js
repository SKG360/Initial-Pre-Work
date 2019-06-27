// Summary Comment - use the .hasOwnProperty(propname) method of objects to determine if that
// object has the given property name. .hasOwnProperty() returns true or false if the
// property is found or not.

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
  return myObj[checkProp];
  }
  else {
    return "Not Found"
  }
}

// Test your code by modifying these values
console.log(checkObj("gift"));
