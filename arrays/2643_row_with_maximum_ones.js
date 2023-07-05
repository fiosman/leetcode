// https://leetcode.com/problems/row-with-maximum-ones/

const rowAndMaximumOnes = (mat) => {
  const maximumOnes = [];
  let currentRowOneCount = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < i.length; j++) {
      if (mat[i][j] === 1) {
        currentRowOneCount++;
      }
    }
  }
};
