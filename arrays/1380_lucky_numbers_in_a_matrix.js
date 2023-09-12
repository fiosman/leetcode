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
  let maxInEachColumn = {};

  for (let i = 0; i < matrix.length; i++) {
    let currentMinValInRow = matrix[i][0];
    minInEachRow[i] = currentMinValInRow;

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < currentMinValInRow) {
        minInEachRow[i] = matrix[i][j];
        currentMinValInRow = matrix[i][j];
      }

      if (!maxInEachColumn[j] || matrix[i][j] > maxInEachColumn[j]) {
        maxInEachColumn[j] = matrix[i][j];
      }
    }
  }

  const rowMinVals = Object.values(minInEachRow);
  const colMaxVals = Object.values(maxInEachColumn);
  const finalArr = [...rowMinVals, ...colMaxVals];

  let res = finalArr[0];
  for (let i = 0; i < finalArr.length; i++) {
    if (finalArr[i + 1] === res) {
      res = finalArr[i + 1];
    }
  }

  console.log(res);
};

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);
