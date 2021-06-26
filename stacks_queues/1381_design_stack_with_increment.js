// https://leetcode.com/problems/design-a-stack-with-increment-operation/

class CustomStack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
    this.size = 0;
  }

  push(x) {
    if (this.size < this.maxSize) {
      this.stack.push(x);
      this.size++;
    }
  }

  pop() {
    if (this.size > 0) {
      this.stack.pop();
      this.size--;
      return this.stack[this.stack.length - 1];
    } else {
      return -1;
    }
  }

  increment() {}
}
