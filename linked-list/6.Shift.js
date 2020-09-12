// 0->1->2->3
// k=1
// 3->0->1->2
// k=-1
// 1->2->3->0

function shiftLinkedList(head, k) {
  let length = 1;
  let final = head;
  while (final.next !== null) {
    length++;
    final = final.next;
  }
  const gap = Math.abs(k) % length;
  if (gap === 0) return head;
  let left = head;
  let right = head;
  if (k > 0) {
    for (let i = 0; i < gap; i++) {
      right = right.next;
    }
    while (right.next !== null) {
      left = left.next;
      right = right.next;
    }
    let result = left.next;
    left.next = null;
    right.next = head;
    return result;
  } else {
    for (let i = 1; i < gap; i++) {
      right = right.next;
    }
    final.next = left;
    const result = right.next;
    right.next = null;
    return result;
  }
}
