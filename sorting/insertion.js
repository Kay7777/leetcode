function insertionSort(array) {
  if (array.length < 2) return array;
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
        j--;
      } else break;
    }
  }
  return array;
}

function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
