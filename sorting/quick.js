function quickSort(array) {
  if (array.length < 2) return array;
  helper(array, 0, array.length - 1);
  return array;
}

function helper(array, start, end) {
  if (start >= end) return;
  let pivot = start;
  let left = pivot + 1;
  let right = end;
  while (left <= right) {
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      swap(array, left, right);
    }
    if (array[left] <= array[pivot]) {
      left++;
    }
    if (array[right] >= array[pivot]) {
      right--;
    }
  }
  swap(array, pivot, right);
  helper(array, pivot, right - 1);
  helper(array, right + 1, end);
}

function swap(array, i, j) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

// O(NlogN) best and average, worst is O(n2)
// space O(logN);
