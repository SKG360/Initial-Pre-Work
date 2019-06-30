// Summary Comment - When there is a desire for code - a function, or a variable - to
// be usable in another file, we must export it in order to import it into another file.
// Like import, export is a non-browser feature.

// --- 2 Line Example ---
// const capitalizeString = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// export { capitalizeString } //How to export functions.
// export const foo = "bar"; //How to export variables.
//
// --- 1 Line Example ---
// const capitalizeString = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// const foo = "bar";
// export { capitalizeString, foo }

"use strict";
export const foo = "bar";
export const bar = "foo";
