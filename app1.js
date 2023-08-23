const validator = require("validator");

// To load the util.js file we use the require() function
// const name = require("./utils.js");

const add = require("./utils.js");

const sum = add(4, 6);

// console.log(name);
console.log(sum);

const getNotes = require("./notes.js");

const getMessage = getNotes();
console.log(getMessage);

console.log(validator.isEmail("mahabir@example.com"));
console.log(validator.isURL("https://www.npmjs.com/package/validator"));
