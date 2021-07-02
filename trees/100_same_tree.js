// https://leetcode.com/problems/same-tree/

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Input: (p = [1, 2, 1]), (q = [1, 1, 2]);
// Output: false;

const Node = require("./node_class").TreeNode;

const isSameTree = (root1, root2) => {
  
};

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
