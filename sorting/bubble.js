function bubbleSort(array) {
  if (array.length < 2) return array;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        valid = false;
        swap(array, i - 1, i);
      }
    }
  }
  return array;
}

function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

// worst and average O(N2) time, best O(n) time
// O(1) space
