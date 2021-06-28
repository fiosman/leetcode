// https://leetcode.com/problems/binary-tree-postorder-traversal/

const postorderTraversal = (root) => {
  if (!root) return [];

  let res = [];

  res = res.concat(postorderTraversal(root.left));
  res = res.concat(postorderTraversal(root.right));
  res.push(root.val);

  return res;
};
