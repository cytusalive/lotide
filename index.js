// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const flatten = require('./flatten');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  eqArrays,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  letterPositions,
  countOnly,
  findKey,
  findKeyByValue,
  flatten,
  map,
  takeUntil,
  without
};
