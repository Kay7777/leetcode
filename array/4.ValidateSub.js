// check the sequence is the subsequence of array or not
// same order but can be not adjcent

function isValidSubsequence(array, sequence) {
  let indexOfArray = 0;
  let indexOfSequency = 0;
  while (indexOfArray < array.length && indexOfSequency < sequence.length) {
    if (array[indexOfArray] === sequence[indexOfSequency]) {
      indexOfSequency += 1;
    }
    indexOfArray += 1;
  }
  if (indexOfSequency < sequence.length) {
    return false;
  } else {
    return true;
  }
}

const res2 = isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]);
console.log(res2);

let Analysis2;
// O(n) time, O(1) space

let Tips2;
// when 2 arrays appear, consider about hash table and indexing.
// because in this question, the order matters, so we prefer indexing.
