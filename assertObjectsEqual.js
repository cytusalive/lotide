const eqArrays = function(ar1, ar2) {
  if (ar1.length == ar2.length) {
    for (let i = 0; i < ar1.length; i++) {
      if (ar1[i] !== ar2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

const eqObjects = function(object1, object2) {
  for (const key in object1) {
    if (object2[key]) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      return false;
    }
  }
  for (const key in object2) {
    if (object1[key]) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

test1 = {
  this: 1231,
  that: "iosajds",
  ssdjo: "1221ii",
  xzcxz: [12, '12', 'qweqw']
};

test2 = {
  this: 1231,
  that: "iosajds",
  ssdjo: "1221ii",
  xzcxz: [12, '12', 'qweqw']
};

assertObjectsEqual(test1, test2);