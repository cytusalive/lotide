// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

console.log(eqObjects(test1, test2)); // true


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
