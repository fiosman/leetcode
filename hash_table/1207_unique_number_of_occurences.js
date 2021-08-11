// https://leetcode.com/problems/unique-number-of-occurrences/

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

const uniqueOccurrences = (arr) => {
  //O(n) time and O(n) space
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }

  const set = new Set(Object.values(freq));
  return Object.values(freq).length == [...set].length ? true : false;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
