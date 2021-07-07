// https://leetcode.com/problems/path-sum/

const Node = require("./node_class").TreeNode;

const hasPathSum = (root, targetSum) => {
  
};

const root1 = new Node(5);
root1.left = new Node(4);
root1.left.left = new Node(11);
root1.left.left.right = new Node(2);
root1.left.left.left = new Node(7);
root1.right = new Node(8);
root1.right.left = new Node(13);
root1.right.right = new Node(4);
root1.right.right.right = new Node(1);
