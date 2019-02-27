// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Solution 1
function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false; 
  let lookup = {};

  for (let i = 0; i < stringA.length; i++) {
    lookup[stringA[i]] = (lookup[stringA[i]] || 0) + 1; 
  }
  for (let i = 0; i < stringB.length; i++) {
    let letter = stringB[i];
    if (!lookup[letter]) {
      return false; 
    } else {
      lookup[letter]--;
    }
  }

  return true; 
}

// Solution 2 
// function sort(str) {
//   return str.toLowerCase().split('').sort().join('');
// }
// function anagrams(stringA, stringB) {
//   return sort(stringA) === sort(stringB);
// }


module.exports = anagrams;
