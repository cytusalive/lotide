// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("1o23j", "1o23j");
// assertEqual('213', 213);
// assertEqual("", 0);