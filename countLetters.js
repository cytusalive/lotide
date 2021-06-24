const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"));