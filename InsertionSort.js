function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const [item] = arr.splice(i, 1);
        arr.splice(j, 1, item);
      }
    }
  }
  return arr;
}

const test = [5, 2, 4, 7, 2, 9, 3, 32, 321, 5, 6, 79987, 1, 2];
console.log(insertionSort(test));
