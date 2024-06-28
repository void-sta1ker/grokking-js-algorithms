const Node = require("../helpers/node");

/**
 * Doubly Linked List
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  get length() {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  deleteHead() {
    if (!this.head) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  deleteTail() {
    if (!this.head) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index - 1) {
        const next = current.next;
        current.next = newNode;
        newNode.next = next;
        newNode.prev = current;
        next.prev = newNode;
        return;
      }
      current = current.next;
      count++;
    }
  }

  removeAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index - 1) {
        const next = current.next;
        current.next = next.next;
        return;
      }
      current = current.next;
      count++;
    }
  }

  remove(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        const next = current.next;
        current.next = next.next;
        return;
      }
      current = current.next;
    }
  }

  clearList() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return !this.head;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  get [Symbol.toStringTag]() {
    return "DoublyLinkedList";
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (!current) {
          return { done: true };
        }
        const value = current.value;
        current = current.next;
        return { value, done: false };
      },
    };
  }
}

module.exports = DoublyLinkedList;
