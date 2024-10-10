// Exercise 1
// Insertion sort

function recursiveInsertionSort(arr, n = arr.length) {
  if (n <= 1) {
    return;
  }

  recursiveInsertionSort(arr, n - 1);

  let last = arr[n - 1];
  let j = n - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
}

const arr = [12, 11, 13, 5, 6];
recursiveInsertionSort(arr);
console.log(arr);


// exercise 2

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    return this.items.join(" ");
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue);
console.log(queue.dequeue());
console.log(queue.printQueue());
