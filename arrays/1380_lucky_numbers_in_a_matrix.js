// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

const luckyNumbers = (matrix) => {
  let maxValPosCol = {};
  let minValPosRow = {};

  for (let i = 0; i < matrix.length; i++) {
    let currentMinRow = matrix[i][0];
    minValPosRow[currentMinRow] = i;
    for (let j = 1; j < matrix[i].length; j++) {
      console.log(`oh yes`, matrix[i][j]);
      if (matrix[i][j] < currentMinRow) {
        currentMinRow = matrix[i][j];
        minValPosRow[currentMinRow] = i;
      }
    }
  }
  return minValPosRow;
};

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
