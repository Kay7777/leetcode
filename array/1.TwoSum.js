function twoNumberSum(array, targetSum) {
  const helper = {};
  for (let num of array) {
    const target = targetSum - num;
    if (target in helper) {
      return [num, target];
    } else {
      helper[num] = true;
    }
  }
  return [];
}

const res1 = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
console.log(res1);

let Analysis1;
// we need to use object helper, that takes O(1) to search
// but array will take O(n) to search, therefore time O(n)

// space O(n) because we helper object takes n space

let Tips1;
// for loop
// array: for (let num of array) {}
// object: for (let num in object) {}

// check existance
// array: if (array.includes(num)) {}
// object: if (key in object) {}
