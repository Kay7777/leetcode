// best and average time O(1), worst O(N), space O(N);
// Load factor = numOfItems / tableSize

// Hashing Functions
// Folding method: 587-977-0987 addition of 58+79+77+09+87 and hashing
// Mid Sqaure Method: 44 = N2 => 1936 = mid => 93 then hashing
// Non-integer elements: use ASCII table match words to integer then hashing

// Collision
// Method one: open addressing / rehashing (finding the next open slot in the hash table)
// Linear Probing: In linear probing, we linearly probe for next slot, adding 1 each time then hashing.
// Quadratic Probing: each  time add 1*1, 2*2 and 3*3 to find the next open slot.
// Method Two: Chaining (each slot holds a reference to a linked list)
// chaining is eaiser to immplement and never fills up. But it wastes space.

class HashTable {
  constructor(size) {
    this.slots = this.createArray(size, null);
    this.data = this.createArray(size, null);
  }

  printSlots = () => this.slots;

  put = (key, data) => {
    let hashValue = this.hashFunction(key);
    while (this.slots[hashValue] !== null && this.slots[hashValue] !== key) {
      hashValue = this.rehashFunction(hashValue);
    }
    if (this.slots[hashValue] === key) {
      this.data[hashValue] = data;
    }
    if (this.slots[hashValue] === null) {
      this.slots[hashValue] = key;
      this.data[hashValue] = data;
    }
  };

  get = (key) => {
    let startSlot = this.hashFunction(key);
    let data = null;
    let stop = false;
    let found = false;
    let position = startSlot;
    while (this.slots[position] !== null && !found && !stop) {
      if (this.slots[position] === key) {
        found = true;
        data = this.data[position];
      } else {
        position = this.rehashFunction(position);
        if (position === startSlot) {
          stop = true;
        }
      }
    }
    return data;
  };

  delete = (key) => {
    let startSlot = this.hashFunction(key);
    let stop = false;
    let found = false;
    let position = startSlot;
    while (this.slots[position] !== null && !found && !stop) {
      if (this.slots[position] === key) {
        found = true;
        this.data[position] = null;
        this.slots[position] = null;
      } else {
        position = this.rehashFunction(position);
        if (position === startSlot) {
          stop = true;
        }
      }
    }
  };

  hashFunction = (key) => {
    return key % this.slots.length;
  };

  rehashFunction = (key) => {
    return (key + 1) % this.slots.length;
  };

  createArray = (num, value) => {
    let array = [value];
    while (array.length < num) {
      array = array.concat(array);
    }
    array = array.slice(0, num);
    return array;
  };
}

const hashTable1 = new HashTable(10);
hashTable1.put(10, "hello");
console.log(hashTable1.printSlots());
console.log(hashTable1.get(10));
hashTable1.put(20, "world");
console.log(hashTable1.printSlots());
console.log(hashTable1.get(10));
console.log(hashTable1.get(20));
hashTable1.put(10, "hi");
console.log(hashTable1.printSlots());
console.log(hashTable1.get(10));
hashTable1.delete(10);
console.log(hashTable1.printSlots());
console.log(hashTable1.get(10));

// hashmap and hashtable in Java
/*
1. HashMap is non synchronized. It is not-thread safe and can’t be shared 
between many threads without proper synchronization code whereas Hashtable is synchronized. 
It is thread-safe and can be shared with many threads.
2. HashMap allows one null key and multiple null values 
whereas Hashtable doesn’t allow any null key or value.
*/
