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
  let minInEachRow = {};

  for (let i = 0; i < matrix.length; i++) {
    let currentMinValInRow = matrix[i][0];
    minInEachRow[i] = currentMinValInRow;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < currentMinValInRow) {
        minInEachRow[i] = matrix[i][j];
        currentMinValInRow = matrix[i][j];
      }
    }
  }

  return minInEachRow;
};

console.log(
  luckyNumbers([
    [3, 7, 1],
    [0, 9, 8],
    [15, 11, 10],
  ])
);
