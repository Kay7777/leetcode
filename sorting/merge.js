function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid, array.length);
  return helper(mergeSort(leftArray), mergeSort(rightArray));
}

function helper(left, right) {
  const array = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array.push(left[i]);
      i++;
    } else {
      array.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    array.push(left[i]);
    i++;
  }
  while (j < right.length) {
    array.push(right[j]);
    j++;
  }
  return array;
}

function helper(left, right) {
  let i = 0;
  let j = 0;
  const array = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array.push(left[i]);
      i++;
    } else {
      array.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    array.push(left[i]);
    i++;
  }
  while (j < right.length) {
    array.push(right[j]);
    j++;
  }
  return array;
}
