class SelectionSort {
  static sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++)
        if (arr[j] < arr[minIndex]) minIndex = j;
      if (i !== minIndex) this.swap(arr, i, minIndex);
    }
    return arr;
  }

  static swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

let result1 = SelectionSort.sort([2, 1, 5, 3, 4]);
console.log(result1);
