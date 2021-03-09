class RadixSort {
  static sort(arr) {
    let maxDigitNum = this.mostNumOfDigits(arr);
    for (let i = 0; i < maxDigitNum; i++) {
      let buckets = Array.from({ length: 10 }, () => []);
      for (let j = 0; j < arr.length; j++)
        buckets[this.getDigitValue(arr[j], i)].push(arr[j]);
      arr = [].concat(...buckets);
    }
    return arr;
  }

  static getDigitValue(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }

  static mostNumOfDigits(digits) {
    let max = 0;
    digits.map((x) => this.digitCount(x) > max && (max = this.digitCount(x)));
    return max;
  }

  static digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
}

let result1 = RadixSort.sort([23, 345, 5467, 12, 2345, 9852]);
console.log(result1);
