function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    arr.forEach((item, i) => {
      if (item > arr[i + 1]) {
        const temp = item;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped);
  return arr;
}

const arr = [1, 5, 7, 3, 5, 7, 3, 2, 4, 8, 9, 5, 3, 2];

console.log(bubbleSort(arr));
