function mergeLinkedLists(headOne, headTwo) {
  let curr1 = headOne;
  let prev1 = null;
  let curr2 = headTwo;
  while (curr1 !== null && curr2 !== null) {
    if (curr1.value < curr2.value) {
      prev1 = curr1;
      curr1 = curr1.next;
    } else {
      if (prev1 !== null) {
        prev1.next = curr2;
      }
      prev1 = curr2;
      curr2 = curr2.next;
      prev1.next = curr1;
    }
  }
  if (curr1 === null) prev1.next = curr2;
  return headOne.value < headTwo.value ? headOne : headTwo;
}

// O(n+m) time, space O(1)
