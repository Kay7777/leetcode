function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  // [-5,-1,10,20]
  // [-2, 3,11,21]
  let i = 0;
  let j = 0;
  let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
  let num;
  while (i < arrayOne.length && j < arrayTwo.length) {
    const currDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (currDiff === 0) {
      return [arrayOne[i], arrayTwo[j]];
    }
    if (currDiff < diff) {
      num = [arrayOne[i], arrayTwo[j]];
      diff = currDiff;
    }
    if (arrayOne[i] < arrayTwo[j]) i++;
    else j++;
  }
  return num;
}

// O(nlogn) time, O(1) space
