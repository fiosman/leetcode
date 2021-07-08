// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

const Node = require("./node_class").TreeNode;

const findSecondMinimumValue = (root) => {
  //intuitive dfs no recursion
  let stack = [root];
  let min = root.val;
  let secondMin;

  while (stack.length) {
    let node = stack.pop();
    if (node.val < min) {
      secondMin = min;
      min = node.val;
    } else if (node.val > min) {
      if (secondMin === undefined || node.val < secondMin) {
        secondMin = node.val;
      }
    }
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return secondMin === undefined ? -1 : secondMin;
};

const root1 = new Node(2);
root1.left = new Node(2);
root1.right = new Node(5);
root1.right.left = new Node(5);
root1.right.right = new Node(7);

console.log(findSecondMinimumValue(root1));
