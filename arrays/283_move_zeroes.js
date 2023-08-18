// https://leetcode.com/problems/move-zeroes/

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

const moveZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {}

  return nums;
};

const swapEles = (eles) => {
  const temp = eles[0];
  eles[0] = eles[1];
  eles[1] = temp;

  return eles;
};
