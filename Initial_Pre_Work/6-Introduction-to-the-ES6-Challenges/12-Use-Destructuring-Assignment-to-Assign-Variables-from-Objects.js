// Summary Comment - Destructuring assignment is special syntax for neatly assigning
// values taken directly from an object to variables.

// var voxel = {x: 3.6, y: 7.4, z: 6.54 };
// const { x, y, z } = voxel; returns --> x = 3.6, y = 7.4, z = 6.54
// const { x : a, y : b, z : c } = voxel returns --> a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
