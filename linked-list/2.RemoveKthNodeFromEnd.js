class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let kth = head;
  for (let i = 0; i < k; i++) {
    kth = kth.next;
  }
  if (kth === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (kth.next !== null) {
    kth = kth.next;
    head = head.next;
  }
  head.next = head.next.next;
}

// O(N) time. and O(1) space;
