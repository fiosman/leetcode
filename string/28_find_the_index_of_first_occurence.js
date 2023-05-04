// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack
// or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const subString = haystack.substring(i, needle.length);
      if (subString === needle) {
        return i;
      }
    } else {
      return -1;
    }
  }
};
