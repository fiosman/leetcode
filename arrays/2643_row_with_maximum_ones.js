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

  let mostCounts = [0, finalRowCounts[0]];
  for (let i = 0; i < finalRowCounts.length; i++) {
    if (finalRowCounts[i] > mostCounts[1]) {
      mostCounts[0] = i;
      mostCounts[1] = finalRowCounts[i];
    }
  }

  return mostCounts;
};

rowAndMaximumOnes([
  [0, 0, 0],
  [0, 1, 1],
]);
