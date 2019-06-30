// Summary Comment - With ES6, the function keyword and colon can be removed altogether
// when defining functions in objects.

// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) { //setGear: function (newGear) <== Original Line
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
