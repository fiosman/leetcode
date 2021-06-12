// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

const maxProduct = (nums) => {
  //O(n) time and O(1) space
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max1 = nums[i];
    }
    if (nums[i] > max2) {
      max2 = nums[i];
    }
  }
  return (max1 - 1) * (max2 - 1);
};

maxProduct([3, 4, 5, 2]);
