function subarraySort(array) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;
  while (array[i] < array[i + 1]) {
    i++;
  }
  while (array[j] > array[j - 1]) {
    j--;
  }
  const minNum = Math.min(...array.slice(i, j + 1));
  const maxNum = Math.max(...array.slice(i, j + 1));
  console.log(i, j);
  console.log(minNum, maxNum);
  let left = 0;
  let right = array.length - 1;
  while (array[left] <= minNum && left < i) {
    left++;
  }
  while (array[right] >= maxNum && right > j) {
    right--;
  }
  // in case the array is ascending or has some duplicate numbers
  if (left >= right || minNum === maxNum) return [-1, -1];
  return [left, right];
}
// [1, 2, 4, 7, 10, /11, 7, 12, 6,/ 7, 16, 18, 19]
// [1, 2, 4 ,7, 10,/ 11, 5 /, 6, 7, 16, 18, 19]
// [1,2,3,/10,4/,5,6]
// [1,2,10,/12,3/,4]
const res10 = subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]);
const res11 = subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19]);
console.log(res10);
console.log(res11);

// O(N) time, O(1) space

let Tips_10;
// slice [a, b)
// Math.max(...array)
