// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

const countNegatives = (grid) => {
  //O(n^2) time and O(1) space
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) count++;
    }
  }

  return count;
};
