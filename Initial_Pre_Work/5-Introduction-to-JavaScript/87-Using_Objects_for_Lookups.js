// Summary Comment - Objects can be thought of as a key/value storage, like a dictionary. 

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val];

  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("delta"));
