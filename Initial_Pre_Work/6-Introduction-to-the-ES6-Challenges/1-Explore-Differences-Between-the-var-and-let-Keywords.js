// Summary Comment - when using let, a variable with the same name can only be declared once.
// Note the "use strict". This enables Strict Mode, which catches common coding mistakes
// and "unsafe" actions.

let catName;
let quote;
function catTalk() {
  "use strict";
  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
