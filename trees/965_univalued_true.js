// https://leetcode.com/problems/univalued-binary-tree/

const Node = require("./node_class").TreeNode;

const isUnivalTree = (root) => {
  let stack = [root];

  while (stack.length) {
    const visitedNode = stack.pop();

    if (visitedNode.left) {
      stack.push(visitedNode.left);
      if (visitedNode.val != visitedNode.left.val) return false;
    }

    if (visitedNode.right) {
      stack.push(visitedNode.right);
      if (visitedNode.val != visitedNode.right.val) return false;
    }
  }

  return true;
};

const a = new Node(1);
const b = new Node(1);
const c = new Node(1);
const d = new Node(1);
const e = new Node(1);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = null;
c.right = f;

console.log(isUnivalTree(a));
