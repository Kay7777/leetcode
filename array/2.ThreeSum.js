function threeNumberSum(array, targetSum) {
  // Write your code here.
  // O(nlogn) sort
  array.sort((a, b) => a - b);
  // [1,2,3,4,5,6] => 10
  console.log(array);
  const res = [];
  for (let leftIndex = 0; leftIndex < array.length - 1; leftIndex++) {
    let midIndex = leftIndex + 1;
    let rightIndex = array.length - 1;
    while (midIndex < rightIndex) {
      let sum = array[leftIndex] + array[rightIndex] + array[midIndex];
      if (sum > targetSum) rightIndex -= 1;
      else if (sum === targetSum) {
        res.push([array[leftIndex], array[midIndex], array[rightIndex]]);
        midIndex += 1;
        rightIndex -= 1;
      } else {
        midIndex += 1;
      }
    }
  }
  return res;
}

const res3 = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
console.log(res3);

let Tips3;
// array.sort()
// continue to used array, it does not save into another array
// array.sort((a,b) => a-b); ascending
// array.sort((a,b) => b-a); decending

// distinct integers mean that integers are different

let Analysis3;
// O(n2) time, O(n) space

// indexing => left, mid, right indexing
