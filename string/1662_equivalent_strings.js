// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

const arrayStringsAreEqual = (word1, word2) => {
  //O(n) time and O(n) space
  return word1.join("") === word2.join("");
};
