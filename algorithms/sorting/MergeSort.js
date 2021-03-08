class MergeSort {
  static sort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = this.sort(arr.slice(0, mid));
    let right = this.sort(arr.slice(mid));
    return this.merge(left, right);
  }

  static merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }

    return results;
  }
}

let result1 = MergeSort.sort([2, 1, 5, 3, 4]);
console.log(result1);
