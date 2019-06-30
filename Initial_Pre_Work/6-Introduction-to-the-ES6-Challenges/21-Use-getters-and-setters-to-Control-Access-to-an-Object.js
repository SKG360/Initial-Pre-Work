// Summary Comment - Getter functions are meant to simply return (get) the value of an
// object's private variable to the user without the user directly accessing the private variable.
//
// Setter functions are meant to modify (set) the value of an object's private variable
// based on the value passed into the setter function. This change could involve
// calculations, or even overwriting the previous value completely.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    get writer(){
      return this.fahrenheit;
    }
    set writer(celsius){
       this.fahrenheit = (celsius * 9.0) / 5 + 32
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
