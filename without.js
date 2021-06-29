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

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
