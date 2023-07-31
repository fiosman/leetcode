// https://leetcode.com/problems/rank-transform-of-an-array/

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.

// Example 3:

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]

const arrayRankTransform = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const ranks = [];

  for (let i = 0; i < arr.length; i++) {
    const indexWithinSortedArr = sortedArr.findIndex((ele) => ele === arr[i]);

    ranks.push(indexWithinSortedArr);
  }

  return ranks;
};

console.log(arrayRankTransform([40, 10, 20, 30]));
