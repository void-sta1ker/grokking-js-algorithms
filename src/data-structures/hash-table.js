/**
 * Hash table. Best case O(1). Average case O(1). Worst case O(n). Space O(n).
 * @description Stores key-value pairs in an array. The array is divided into sections, and each section is a linked list. The hash table is an array of sections.
 */
class HashTable {
  constructor() {
    this._table = new Array(137);
  }

  _hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this._table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    this._table[index] = new ValuePair(key, value);
  }

  get(key) {
    const index = this._hash(key);
    const valuePair = this._table[index];
    if (valuePair) {
      return valuePair.value;
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    const valuePair = this._table[index];
    if (valuePair) {
      delete this._table[index];
    }
  }

  getTable() {
    return this._table;
  }

  clear() {
    this._table = new Array(137);
  }

  getLength() {
    return this._table.filter((valuePair) => {
      return valuePair;
    }).length;
  }

  isEmpty() {
    return !this._table.filter((valuePair) => {
      return valuePair;
    }).length;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this._table[0]}`;
    for (let i = 1; i < this.length; i++) {
      objString = `${objString},${this._table[i]}`;
    }
    return objString;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

// const hashTable = new HashTable();
// hashTable.set("name", "John");
// hashTable.set("age", 30);
// hashTable.set("name", "Doe");

// console.log(hashTable.get("name"));
// console.log(hashTable.get("age"));
// console.log(hashTable.get("job"));
// console.log(hashTable.toString());

module.exports = HashTable;
