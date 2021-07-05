// https://leetcode.com/problems/sum-of-left-leaves/

const Node = require("./node_class").TreeNode;

const sumOfLeftLeaves = (root) => {
  let queue = [root];
  let sum = 0;

  if (!root) return sum;

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.left) {
      queue.push(node.left);
      if (node.left.left === null && node.left.right === null) {
        sum += node.left.val;
      }
    }
    if (node.right) queue.push(node.right);
  }

  return sum;
};

const root1 = new Node(3);
root1.left = new Node(9);
root1.right = new Node(20);
root1.right.left = new Node(15);
root1.right.right = new Node(7);

console.log(sumOfLeftLeaves(root1));
