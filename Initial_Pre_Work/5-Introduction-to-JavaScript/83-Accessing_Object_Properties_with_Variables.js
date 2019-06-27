// Summary Comment - do not use quotes around the variable name when using it to access
// the property because we are using the value of the variable, not the name.

//----------
// Use the playerNumber variable to look up player 16 in testObj using bracket notation.
// Then assign that name to the player variable.

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
