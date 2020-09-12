function rearrangeLinkedList(head, k) {
  let smallHead = null;
  let smallTail = null;
  let equalHead = null;
  let equalTail = null;
  let largeHead = null;
  let largeTail = null;
  let curr = head;
  while (curr !== null) {
    if (curr.value < k) {
      [smallHead, smallTail] = growLinkedList(smallHead, smallTail, curr);
    } else if (curr.value === k) {
      [equalHead, equalTail] = growLinkedList(equalHead, equalTail, curr);
    } else {
      [largeHead, largeTail] = growLinkedList(largeHead, largeTail, curr);
    }
    const prev = curr;
    curr = curr.next;
    prev.next = null;
  }
  const [firstHead, firstTail] = connectLinkedList(
    smallHead,
    smallTail,
    equalHead,
    equalTail
  );
  const [finalHead, finalTail] = connectLinkedList(
    firstHead,
    firstTail,
    largeHead,
    largeTail
  );
  return finalHead;
}

function growLinkedList(head, tail, curr) {
  let newHead = head;
  let newTail = curr;
  if (newHead === null) newHead = curr;
  if (tail !== null) tail.next = curr;
  return [newHead, newTail];
}

function connectLinkedList(headOne, tailOne, headTwo, tailTwo) {
  const newHead = headOne === null ? headTwo : headOne;
  const newTail = tailTwo === null ? tailOne : tailTwo;
  if (tailOne !== null) tailOne.next = headTwo;
  return [newHead, newTail];
}

// O(n) time
// O(1) space
// because Node takes the reference to pass around, does not take the new space
