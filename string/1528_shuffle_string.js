// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

//https://leetcode.com/problems/shuffle-string/

const restoreString = (s, indices) => {
  //O(n) time and O(n) space
  let shuffledString = new Array(s.length).fill("");
  for (let i = 0; i < indices.length; i++) {
    shuffledString[indices[i]] = s[i];
  }
  return shuffledString.join("");
};
