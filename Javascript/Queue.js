class Queue {
  constructor() {
    this.count = 0;
    this.head = null;
    this.rear = null;
  }

  enqueue(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    ++this.count;
    this.rear = node;
  }

  dequeue() {
    if (!this.head) return false;

    let data = this.head.data;
    this.head = this.head.next;
    --this.count;

    return data;
  }

  all() {
    let start = this.head;
    const queueArray = [];

    while (start) {
      queueArray.push(start.data);
      start = start.next;
    }

    return queueArray;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(10);

console.log(queue.all());
console.log(queue.dequeue());
console.log(queue.dequeue());
