function spiralTraverse(array) {
  // Write your code here.
  let sC = 0;
  let eC = array[0].length - 1;
  let sR = 0;
  let eR = array.length - 1;
  const res = [];
  while (res.length < array[0].length * array.length) {
    for (let i = sC; i <= eC; i++) {
      res.push(array[sR][i]);
    }
    for (let i = sR + 1; i <= eR; i++) {
      res.push(array[i][eC]);
    }
    for (let i = eC - 1; i >= sC; i--) {
      if (sR === eR) break;
      res.push(array[eR][i]);
    }
    for (let i = eR - 1; i > sR; i--) {
      if (sC === eC) break;
      res.push(array[i][sC]);
    }
    sC++;
    eC--;
    sR++;
    eR--;
  }
  return res;
}

// O(n) time O(n) space
