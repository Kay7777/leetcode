function moveElementToEnd(array, toMove) {
  // Write your code here.
  if (toMove in array) {
  } else {
    return array;
  }
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (array[j] === toMove && i < j) {
      j--;
    }
    if (array[i] === toMove) swap(i, j, array);
    i++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

const res41 = moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
const res42 = moveElementToEnd([], 2);
const res43 = moveElementToEnd([1, 2, 3, 4], 5);
const res44 = moveElementToEnd([5, 5, 5, 5, 5], 5);
const res45 = moveElementToEnd([5, 5, 5, 7, 8, 9, 10, 11, 12], 5);
const res46 = moveElementToEnd([7, 8, 9, 10, 11, 12, 5, 5, 5], 5);
console.log(res41);
console.log(res42);
console.log(res43);
console.log(res44);
console.log(res45);

// O(n) time, O(1) space

// swap function, indexing => left right indexing
