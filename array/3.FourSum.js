const array = [7, 6, 4, -1, 1, 2];
const targetSum = 16;

function fourNumberSum(array, targetSum) {
  if (array.length < 4) return [];
  let left1 = 0;
  let right = array.length - 1;
  const final = [];
  array.sort((a, b) => a - b);
  console.log(array);
  while (left1 < right - 2) {
    let left2 = left1 + 1;
    while (left2 < right - 1) {
      let left3 = left2 + 1;
      while (left3 < right) {
        console.log(array[left1], array[left2], array[left3], array[right]);
        const sum = array[left1] + array[left2] + array[left3] + array[right];
        if (sum === targetSum) {
          final.push([array[left1], array[left2], array[left3], array[right]]);
          left3++;
          right--;
        } else if (sum > targetSum) {
          right--;
        } else if (sum < targetSum) {
          left3++;
        }
      }
      left2++;
      right = array.length - 1;
    }
    left1++;
    right = array.length - 1;
  }
  return final;
}

const res9 = fourNumberSum(array, targetSum);
console.log(res9);

// O(n3) time, O(n) space
