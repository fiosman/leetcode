// https://leetcode.com/problems/sort-the-people/

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

const sortPeople = (names, heights) => {
  for (let i = 0; i < names.length; i++) {
    if (!heights[i + 1]) {
      break;
    }
    if (heights[i + 1] > heights[i]) {
      [names[i], names[i + 1]] = [names[i + 1], names[i]];
    }
  }
  return names;
};
