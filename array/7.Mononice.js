function isMonotonic(array) {
  // [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
  if (array.length <= 2) return true;
  let direct = array[0] - array[1];
  for (let i = 1; i < array.length; i++) {
    if (direct === 0) {
      direct = array[i] - array[i + 1];
      continue;
    }
    if (array[i] - array[i + 1] > 0) {
      if (direct < 0) return false;
    } else if (array[i] - array[i + 1] < 0) {
      if (direct > 0) return false;
    }
  }
  return true;
}

// O(n) time O(1) space
