function heapSort(array) {
  // build the heap first
  const firstParent = Math.floor((array.length - 2) / 2);
  for (firstParent; firstParent >= 0; firstParent--) {
    siftDown(array, firstParent);
  }
  // heap sort
  const sortedArray = [];
  for (let end = array.length - 1; end >= 0; end--) {
    swap(0, end, array);
    sortedArray.push(array.pop());
    siftDown(0, end, array);
  }
}

function siftDown(array, start, end) {
  let leftChild = checkPoint * 2 + 1;
  while (leftChild < rightChild) {
    let idxToSwap;
    let rightChild = checkPoint * 2 + 2 <= end ? checkPoint * 2 + 2 : -1;
    if (rightChild !== -1 && heap[rightChild] < heap[leftChild]) {
      idxToSwap = rightChild;
    } else {
      idxToSwap = leftChild;
    }
    if (heap[idxToSwap] < heap[start]) {
      swap(heap, start, idxToSwap);
      start = idxToSwap;
      leftChild = idxToSwap * 2 + 1;
    } else return;
  }
}

function swap(heap, i, j) {
  const temp = heap[j];
  heap[j] = heap[i];
  heap[i] = temp;
}
