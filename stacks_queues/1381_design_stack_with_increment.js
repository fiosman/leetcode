// https://leetcode.com/problems/design-a-stack-with-increment-operation/

class CustomStack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  push(x) {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
      return this.stack[this.stack.length - 1];
    } else {
      return -1;
    }
  }

  increment() {}
}
