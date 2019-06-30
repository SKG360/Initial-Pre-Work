// Summary Comment - This is to be noted, that the class syntax is just a syntax,
// and not a full-fledged class based implementation of object oriented paradigm,
// unlike in languages like Java, or Python, or Ruby etc.
//
// Notice that the class keyword declares a new function, and a constructor was added,
// which would be invoked when new is called - to create a new object.


function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor (name){
      this.name = name; //not sure what the "this" method is for
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
