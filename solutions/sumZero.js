/*
  By: 
    Mark Zaky <MarkZaki>
  Description: 
    Write a function that accepts a sorted array of integers,
    The function should find the first pair of integers
    where their sum is 0, return an array that includes both
    values that sum to 0 or undefined if a pair does not exist
*/

// Solution
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// test the function
let result1 = sumZero([-3, -2, -1, 0, 1, 2, 3]);
let result2 = sumZero([-2, 0, 1, 3]);
let result3 = sumZero([1, 2, 3]);

console.log(result1); // Output: [-3, 3]
console.log(result2); // Output: undefined
console.log(result3); // Output: undefined
