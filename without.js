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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const without = function(source, toRemove) {
  let toInclude = true;
  let newArray = [];
  for (let element of source) {
    toInclude = true;
    for (let target of toRemove) {
      if (element === target) {
        toInclude = false;
      }
    }
    if (toInclude) {
      newArray.push(element);
    }
  }
  return newArray;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
