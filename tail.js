const assertEqual = require('./assertEqual');

const tail = function(ary) {
  return ary.slice(1);
};

module.exports = tail;
