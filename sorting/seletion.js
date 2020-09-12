function selectionSort(array) {
  if (array.length < 2) return array;
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < smallest) {
        smallest = array[j];
        index = j;
      }
    }
    if (index !== i) {
      swap(array, i, index);
    }
  }
  return array;
}

function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
