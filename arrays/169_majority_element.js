/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  for (item in hash) {
    if (hash[item] > nums.length / 2) {
      return item;
    }
  }
};

majorityElement([3, 2, 3]);
