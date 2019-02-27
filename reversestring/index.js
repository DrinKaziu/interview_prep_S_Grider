// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//   let reversedStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return reversedStr;
// }

// Solution 2
function reverse(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed; 
  }

  return reversed; 
}

// Solution 3
// function reverse(str) {
//   return str.split('').reduce((reved, char) => char + reved, '');
// }

module.exports = reverse;
