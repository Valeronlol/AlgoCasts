// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const symbols = {}
  const most = { char: null, result: 0 }
  for (let char of str) {
    if (symbols[char]) symbols[char]++
    else symbols[char] = 1
    if (symbols[char] > most.result) {
      most.char = char
      most.result = symbols[char]
    }
  }
  return most.char
}

module.exports = maxChar;
