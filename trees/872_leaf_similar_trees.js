// https://leetcode.com/problems/leaf-similar-trees/

const Node = require("./node_class").TreeNode;

const leafSimilar = (root1, root2) => {
  if (!root1 || !root2) return true;

  console.log(root1.val);
  console.log(root2.val);
  console.log("------");

  leafSimilar(root1.left, root2.left);
  leafSimilar(root1.right, root2.right);
};

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);

const root2 = new Node(1);
root2.left = new Node(3);
root2.right = new Node(2);

leafSimilar(root1, root2);
