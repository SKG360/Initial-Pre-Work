// Summary Comment -  With the import command, certain parts of a module or file to
// load into a given file, saving time and memory.

// --- Example ---
// import { function } from "file_path_goes_here"
// We can also import variables the same way!

// Note:  In most cases, the file path requires a ./ before it; otherwise, node will
// look in the node_modules directory first trying to load it as a dependency.

"use strict";
capitalizeString("hello!");
import { capitalizeString } from "string_functions";
