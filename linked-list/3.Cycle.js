// two pointers
function hasCycle1(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

// hashmap method
function hasCycle2(head) {
  const set = new Set();
  if (head === null) return false;
  while (head.next !== null) {
    if (set.has(head)) return true;
    else set.add(head);
    head = head.next;
  }
  return false;
}

// now we need to tell at which index the loop occurs.
function findLoop(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}

// all O(N) time
