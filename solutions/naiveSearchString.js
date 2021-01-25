/*
  By: 
    Mark Zaky <MarkZaki>
  Description: 
    Write a function that accepts a string and a substring,
    And counts the number of matches in the main string
*/

// Solution
function naiveSearchString(long, short) {
  let countOfMatches = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) countOfMatches++;
    }
  }
  return countOfMatches;
}

// test the function
let result1 = naiveSearchString("lorie loled", "lol");
let result2 = naiveSearchString("lorie loled", "lo");
let result3 = naiveSearchString("lorie loled", "bob");

console.log(result1); // Output: 1
console.log(result2); // Output: 2
console.log(result3); // Output: 0
