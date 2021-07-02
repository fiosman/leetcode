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

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  let root1Q = [p];
  let root2Q = [q];

  while (root1Q.length || root2Q.length) {
    const root1Node = root1Q.shift();
    const root2Node = root2Q.shift();

    if (!root1Node || !root2Node) return false;

    if (root1Node.val != root2Node.val) return false;

    if (root1Node.left && root2Node.left) {
      root1Q.push(root1Node.left);
      root2Q.push(root2Node.left);
    } else if (root1Node.left != null || root2Node.left != null) {
      return false;
    }

    if (root1Node.right && root2Node.right) {
      root1Q.push(root1Node.right);
      root2Q.push(root2Node.right);
    } else if (root1Node.right != null || root2Node.right != null) {
      return false;
    }
  }

  return true;
};

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

console.log(isSameTree(root1, root2));
