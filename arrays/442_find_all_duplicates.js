// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []

const findDuplicates = (nums) => {
  //O(n) time and O(1) space => The output array always has 2 elements regardless of n (i.e. input array length)
  let dups = [];
  let num;
  for (let i = 0; i < nums.length; i++) {
    num = Math.abs(nums[i]);
    if (nums[num - 1] < 0) {
      dups.push(Math.abs(nums[i]));
    } else {
      nums[num - 1] = nums[num - 1] * -1;
    }
  }
  return dups;
};

console.log(findDuplicates([[1, 1, 2]]));
