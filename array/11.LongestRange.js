function largestRange1(array) {
  // Write your code here.
  array.sort((a, b) => a - b);
  console.log(array);
  if (array.length === 1) {
    return [array[0], arrya[0]];
  }
  let final = [0, 0];
  let i = 0;
  while (i < array.length - 1) {
    let j = i;
    while (array[j] === array[j + 1] - 1 || array[j] === array[j + 1]) {
      j++;
    }
    if (j - i + 1 > final[1] - final[0]) {
      final = [array[i], array[j]];
    }
    i = j + 1;
  }
  return final;
}
// [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 15];
const res12 = largestRange1([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);
console.log(res12);

let Tips_12;
// becareful that final is array[i], array[j] not array[j+1]
// O(NlogN) time, O(1) space

function largestRange2(array) {
  let final = [0, 0];
  const nums = {};
  for (const num of array) nums[num] = true;
  for (const num of array) {
    if (!nums[num]) continue; // means that num has been explored before
    nums[num] = false;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      right++;
    }
    const currRange = right - left - 1;
    if (currRange > final[1] - final[0]) {
      final = [left + 1, right - 1];
    }
  }
  return final;
}

// using hash table O(N) time, O(N)
