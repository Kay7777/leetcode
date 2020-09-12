class RandomizedSet {
  constructor() {
    this.map = new Map();
    this.arr = [];
  }

  insert(val) {
    if (this.map.has(val)) return false;

    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;

    const valIdx = this.map.get(val);
    const lastIdx = this.arr.length - 1;
    const lastNum = this.arr[lastIdx];

    [this.arr[valIdx], this.arr[lastIdx]] = [
      this.arr[lastIdx],
      this.arr[valIdx],
    ];
    this.arr.pop();
    this.map.set(lastNum, valIdx);
    this.map.delete(val);
    return true;
  }

  getRandom() {
    const randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
  }
}

// Map
// hash table and map cannot index and get length;
// map.set(key, value);
// map.get(key);
// map.has(key);
// map.delete(key);
