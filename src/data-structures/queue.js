/**
 * Queue data structure
 * @description First in, first out
 */
class Queue {
  constructor() {
    this._queue = [];
  }

  get length() {
    return this._queue.length;
  }

  enqueue(value) {
    this._queue.push(value);
  }

  dequeue() {
    return this._queue.shift();
  }

  peek() {
    return this._queue[0];
  }

  isEmpty() {
    return this._queue.length === 0;
  }

  clear() {
    this._queue = [];
    return this;
  }

  reverse() {
    this._queue.reverse();
  }

  print() {
    console.log(this._queue);
  }

  // toString() {
  //   return this._queue.toString();
  // }

  [Symbol.iterator]() {
    return this._queue[Symbol.iterator]();
  }

  get [Symbol.toStringTag]() {
    return "Queue";
  }
}

export default Queue;
