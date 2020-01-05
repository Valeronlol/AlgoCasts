const reverse = require('../reversestring')

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const abs = Math.abs(parseInt(reverse(n.toString())))
  return n < 0 ? -abs : abs
}

module.exports = reverseInt;
