function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      return queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

export default createQueue;
