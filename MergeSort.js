function merge(left, right) {
  console.log('merge FN');
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

const numbers = [1, 43, 2, 3, 65, 7, 8, 5, 4, 3, 3, 5, 6, 122, 22, 11, 65];

console.log(mergeSort(numbers));
