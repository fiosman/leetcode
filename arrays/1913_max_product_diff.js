// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y,
// and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

const maxProductDifference = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);

  const maxPairProduct = sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2];
  const minPairProduct = sortedNums[0] * sortedNums[1];

  return maxPairProduct - minPairProduct;
};

console.log(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]));
