// 46. Find all permutations

// given a string or an array, generate all permutations of it.

// 3 keys to backtracking
// 1. choice
// 2. constraints
// 3. goal

// O(n! * n) time
// store in array O(n * n!) space, print O(n)

function permute(nums) {
  if (nums.length <= 1) return [nums];
  const answers = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // newNums is the choice
    const newNums = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
    for (let res of permute(newNums)) {
      answers.push([num].concat(res));
    }
  }
  return answers;
}
