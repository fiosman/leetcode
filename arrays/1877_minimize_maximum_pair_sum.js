// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/

const minPairSum = (nums) => {
  //O(nlogn) time and O(n) space
  const sorted = nums.sort((a, b) => a - b);

  let lo = 1;
  let hi = sorted.length - 2;
  let max = sorted[0] + sorted[sorted.length - 1];

  while (lo < hi) {
    if (sorted[lo] + sorted[hi] > max) {
      max = sorted[lo] + sorted[hi];
    }
    lo++;
    hi--;
  }

  return max;
};

console.log(minPairSum([4, 1, 5, 1, 2, 5, 1, 5, 5, 4]));
