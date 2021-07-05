// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given the root of a binary tree, return the level order
//traversal of its nodes' values. (i.e., from left to right, level by level).

const Node = require("./node_class").TreeNode;

const levelOrder = (root) => {};

const root1 = new Node(1);
root1.left = new Node(9);
root1.right = new Node(20);
root1.right.left = new Node(15);
root1.right.right = new Node(7);

levelOrder(root1);
