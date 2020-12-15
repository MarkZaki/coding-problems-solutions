/*
  By: 
    Mark Zaky <MarkZaki>
  Description: 
    Write a function that accepts an array of integers,
    and a number called 'n'
    The function should calculate the maximum sum of 'n' consecutive elements in the array
*/

// Solution
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// test the function
let result1 = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log(result1); // Output: 19
