/*
  By: 
    Mark Zaky <MarkZaki>
  Description: 
    Write a function that accepts two arrays,
    The function should return true if every value
    in the array has it's corresponding value squared
    in the second array.
    the frequency of values must be the same
    order is not important
*/

// Solution
function frequnecyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }

  return true;
}

// test the function
let result1 = frequnecyCounter([1, 2, 3, 2], [9, 1, 4, 4]);
let result2 = frequnecyCounter([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

console.log(result1); // Output: true
console.log(result2); // Output: false
