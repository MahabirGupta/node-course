console.log("utils.js");

const name = "Anish";

const add = function (a, b) {
  return a + b;
};

// sharing the variables of utils.js with app1.js
module.exports = name;
module.exports = add;
