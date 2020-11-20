/*
  By: 
    Mark Zaky <MarkZaki>
  Description: 
    Write a function that accepts a sorted array,
    And counts the unique values in the array.
    The array can contain negative numbers.
    But it will always be sorted.
*/

// Solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// test the function
let result1 = countUniqueValues([1, 1, 1, 1, 1, 2]);
let result2 = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
let result3 = countUniqueValues([]);
let result4 = countUniqueValues([-2, -1, -1, 0, 1]);

console.log(result1); // Output: 2
console.log(result2); // Output: 7
console.log(result3); // Output: 0
console.log(result4); // Output: 4
