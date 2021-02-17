class BubbleSort {
  static sort(arr) {
    for (let i = arr.length; i > 0; i--)
      for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) this.swap(arr, j, j + 1);
      }
    return arr;
  }

  static swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

let result1 = BubbleSort.sort([2, 1, 5, 3, 4]);
console.log(result1);
