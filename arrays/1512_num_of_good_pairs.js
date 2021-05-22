// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

const numIdenticalPairs = (nums) => {
  // O(n) time and O(n) space
  let pairs = {};
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (pairs[nums[i]]) {
      pairs[nums[i]] += 1;
    } else {
      pairs[nums[i]] = 1;
    }
  }

  for (let key in pairs) {
    if (pairs[key] % 2 === 0 && pairs[key] > 1) {
      counter++;
    } else {
      if (pairs[key] > 1) counter = counter + pairs[key];
    }
  }

  return counter;
};
