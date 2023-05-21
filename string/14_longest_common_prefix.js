// https://leetcode.com/problems/longest-common-prefix/

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
  let shortestWord = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortestWord.length) {
      shortestWord = strs[i];
    }
  }

  const filteredStrs = strs.filter((str) => str !== shortestWord);
  //hash map with prefixes here to get the longest length?
  let commonPrefix = "";
  for (let i = 0; i < filteredStrs.length; i++) {
    for (let j = 0; j < filteredStrs[i].length; j++) {
      if (filteredStrs[i][j] === shortestWord[j]) {
        commonPrefix += filteredStrs[i][j];
      }
    }
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
