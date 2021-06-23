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

const middle = function(array) {
  let midArray = []
  if (array.length < 3) {
    return midArray;
  } else if (array.length % 2 === 0) {
      midArray = array.slice(Math.floor(array.length/2 - 1), Math.floor(array.length/2) + 1);
      return midArray;
  } else if (array.length % 2 === 1) {
      midArray.push(array[Math.floor(array.length/2)]);
      return midArray;
  }
}

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])

assertArraysEqual(middle([1, 2, 3]), [2]) 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) 

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) 
