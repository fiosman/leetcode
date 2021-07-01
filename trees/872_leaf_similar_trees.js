// https://leetcode.com/problems/leaf-similar-trees/

const Node = require("./node_class").TreeNode;

const leafSimilar = (root1, root2) => {};

const root1 = new Node(3);
root1.left = new Node(5);
root1.left.left = new Node(6);
root1.left.right = new Node(2);
root1.left.right.left = new Node(7);
root1.right = new Node(1);
root1.right.right = new Node(8);
root1.right.left = new Node(9);

const root2 = new Node(3);
root2.left = new Node(5);
root2.left.left = new Node(6);
root2.left.right = new Node(7);
root2.right = new Node(1);
root2.right.left = new Node(4);
root2.right.right = new Node(2);
root2.right.right.left = new Node(9);
root2.right.right.right = new Node(8);

console.log(root1);
