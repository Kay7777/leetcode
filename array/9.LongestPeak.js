function longestPeak1(array) {
  if (array.length <= 2) return 0;
  let res = 0;
  let curr = 1;
  let turn = false;
  for (let i = 1; i < array.length; i++) {
    if (!turn && array[i - 1] < array[i]) {
      curr++;
    } else if (!turn && array[i - 1] > array[i]) {
      turn = true;
      curr++;
    } else if (turn && array[i - 1] > array[i]) {
      curr++;
    } else {
      if (curr > res) {
        res = curr;
      }
      curr = 1;
    }
    // console.log(`${i} loop: the curr is ${curr}, res is ${res}`);
  }
  if (res >= 3) return res;
  else return 0;
}

// this is a false solution, looks like we can use the for loop to search a peak
// but it has lot of edge case like 1,2,3,3
// we need to make a peak model and roll it and spread it.
function longestPeak2(array) {
  if (array.length <= 2) return 0;
  let final = 0;
  let i = 1;
  while (i < array.length - 1) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      // now we find a peak, we need to spread it.
      let left = i - 2;
      let right = i + 2;
      while (left >= 0 && array[left] < array[left + 1]) {
        left--;
      }
      while (right < array.length && array[right - 1] > array[right]) {
        right++;
      }
      const curr = right - left - 1;
      final = Math.max(curr, final);
      i = right;
    } else {
      i++;
    }
  }
  return final >= 3 ? final : 0;
}

const res8 = longestPeak2([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
console.log(res8);

// O(n) time, using "while" instead of "for" to make sure only travse once
// O(1) space
