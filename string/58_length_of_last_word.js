// https://leetcode.com/problems/length-of-last-word/

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (string) => {
  const words = string.trim().split(" ");
  return words[words.length - 1].length;
};
