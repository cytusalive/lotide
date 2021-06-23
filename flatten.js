const flatten = function(array) {
  let newArray = [];
  for (element of array) {
    if (Array.isArray(element)) {
      for (item of element) {
        newArray.push(item);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}


console.log(flatten([[1, 31], 22, [3, 4, 5], [5], [6, 8, 9]]))