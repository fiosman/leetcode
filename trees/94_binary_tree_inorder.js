// https://leetcode.com/problems/binary-tree-inorder-traversal/

const Node = require("./node_class").TreeNode;

const inorderTraversal = (root) => {
  if (!root) return [];
  let res = [];

  let current = root;

  if (current.left) {
    res = res.concat(inorderTraversal(current.left));
  }
  res.push(current.val);

  if (current.right) {
    res = res.concat(inorderTraversal(current.right));
  }

  return res;
};

//inorder => print left subtree, print self, print right subtree
