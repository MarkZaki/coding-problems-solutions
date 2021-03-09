class QuickSort {
  static sort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = this.pivot(arr, left, right);
      this.sort(arr, left, pivotIndex - 1);
      this.sort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

  static pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        this.swap(arr, swapIndex, i);
      }
    }
    this.swap(arr, start, swapIndex);
    return swapIndex;
  }

  static swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

let result1 = QuickSort.sort([4, 8, 2, 1, 5, 7, 6, 3]);
console.log(result1);
