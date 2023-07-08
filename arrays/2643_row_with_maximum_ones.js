// https://leetcode.com/problems/row-with-maximum-ones/

const rowAndMaximumOnes = (mat) => {
  let currentRowOneCount = 0;
  const finalRowCounts = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        currentRowOneCount++;
      }
    }

    finalRowCounts.push(currentRowOneCount);
    currentRowOneCount = 0;
  }

  return finalRowCounts;
};

rowAndMaximumOnes([
  [0, 1],
  [1, 0],
]);
