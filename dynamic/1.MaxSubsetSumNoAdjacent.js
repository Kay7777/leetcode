// DP => try to find the pattern and then find a solution.
// find a recursive / iterative solution, try to find if there is a lot of repoeated states in it.
// and then try to store them in a matrix.

function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  const maxSum = array.slice();
  maxSum[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + array[i]);
  }
  return maxSum[maxSum.length - 1];
}

// the idea is we copy the array first "array.slice()"
// then the optimized solution is to
// compare (the current value + i-2 value) and (i-1 value) in the maxSum array.

// O(N) time and O(N) space.
