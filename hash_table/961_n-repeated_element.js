// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

// In a array nums of size 2 * n, there are n + 1 unique elements, and exactly one of these elements is repeated n times.

// Return the element repeated n times.

const repeatedNTimes = (nums) => {
  const freq = {};

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      freq[nums[i]] += 1;
    } else {
      freq[nums[i]] = 1;
    }

    if (freq[nums[i]] === nums.length / 2) return nums[i];
  }
};

console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
