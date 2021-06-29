const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

module.exports = assertObjectsEqual;
// test1 = {
//   this: 1231,
//   that: "iosajds",
//   ssdjo: "1221ii",
//   xzcxz: [12, '12', 'qweqw']
// };

// test2 = {
//   this: 1231,
//   that: "iosajds",
//   ssdjo: "1221ii",
//   xzcxz: [12, '12', 'qweqw']
// };

// assertObjectsEqual(test1, test2);