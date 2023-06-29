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
};

leftRightDifference([10, 4, 8, 3]);
