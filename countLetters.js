const countLetters = function(sentence) {
  let finalCount = {};
  for (letter of sentence) {
    if (letter !== ' ') {
      if (finalCount[letter]) {
        finalCount[letter] += 1;
      } else {
        finalCount[letter] = 1;
      }
    }
  }
  return finalCount;
}

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));