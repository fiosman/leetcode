// https://leetcode.com/problems/average-of-levels-in-binary-tree/

const Node = require("./node_class").TreeNode;

const averageOfLevels = (root) => {
  let queue = [root];
  let res = [];

  if (!root) return res;

  let levelSum = 0;

  while (queue.length) {
    levelSum = 0;
    let queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const visitedNode = queue.shift();
      levelSum += visitedNode.val;
      if (visitedNode.left) {
        queue.push(visitedNode.left);
      }
      if (visitedNode.right) {
        queue.push(visitedNode.right);
      }
    }

    res.push(levelSum / queueSize);
  }

  return res;
};

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(averageOfLevels(a));
