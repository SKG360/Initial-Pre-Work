// Summary Comment - A switch statement tests a value and can have many case statements
// which define various possible values.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;
    case 4:
      answer="delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(caseInSwitch(2));
