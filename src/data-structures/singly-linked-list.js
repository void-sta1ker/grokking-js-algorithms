import Node from "../helpers/node";

/**
 * Singly Linked List
 */
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // get head() {
  //   return this.head;
  // }

  // get tail() {
  //   return this.tail;
  // }

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
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
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
    return this.head === null;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // toString() {
  //   let current = this.head;
  //   let string = "";
  //   while (current) {
  //     string += current.value;
  //     current = current.next;
  //   }
  //   return string;
  // }

  get [Symbol.toStringTag]() {
    return "SinglyLinkedList";
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false };
        }
        return { done: true };
      },
    };
  }
}

export default SinglyLinkedList;
