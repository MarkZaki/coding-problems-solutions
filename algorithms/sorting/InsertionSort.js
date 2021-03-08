class InsertionSort {
  static sort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--)
        arr[j + 1] = arr[j];
      arr[j + 1] = currentVal;
    }
    return arr;
  }
}

let result1 = InsertionSort.sort([2, 1, 9, 76, 4]);
console.log(result1);
