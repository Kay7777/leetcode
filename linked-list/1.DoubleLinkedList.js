module.export = class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

console.log(node1.next.value);
console.log(node3.prev.value);
