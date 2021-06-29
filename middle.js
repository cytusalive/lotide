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

module.exports = middle;
