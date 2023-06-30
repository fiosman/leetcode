// https://leetcode.com/problems/left-and-right-sum-differences/

var leftRightDifference = function (nums) {
  let currentLeftSum = 0;
  let currentRightSum = 0;
  const leftSum = [0];
  const rightSum = [];

  for (let i = 1; i < nums.length; i++) {
    currentLeftSum += nums[i - 1];
    leftSum.push(currentLeftSum);
  }

  for (let i = 1; i < nums.length; i++) {
    rightSum.push(nums.slice(i, nums.length).reduce((s, t) => s + t));
  }
  rightSum.push(0);

  return rightSum;
};

leftRightDifference([10, 4, 8, 3]);
