// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// function chunk(array, size) {
//   let chunked = [];

//   for (let el of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([el]);
//     } else {
//       last.push(el);
//     }
//   }

//   return chunked; 
// }

// Solution 2
function chunk(arr, size) {
  let start = 0; 
  let end = size; 
  let chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(start, end))
    start = end; 
    end += size; 
  }
  
  return chunked; 
}

module.exports = chunk;
