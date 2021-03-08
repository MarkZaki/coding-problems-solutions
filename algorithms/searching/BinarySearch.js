class BinarySearch {
  constructor(array) {
    this.array = array;
  }
  searchInArrayFor(element) {
    let start = 0;
    let end = this.array.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (this.array[middle] !== element && start <= end) {
      if (element < this.array[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
    return this.array[middle] === element ? middle : -1;
  }
}

const binarySearch = new BinarySearch([1, 2, 4, 6, 7, 9, 10, 14, 29, 56]);

let result1 = binarySearch.searchInArrayFor(1);
let result2 = binarySearch.searchInArrayFor(56);
let result3 = binarySearch.searchInArrayFor(9);
let result4 = binarySearch.searchInArrayFor(50);

console.log(result1); // Should Return : 0
console.log(result2); // Should Return : 9
console.log(result3); // Should Return : 5
console.log(result4); // Should Return : -1
