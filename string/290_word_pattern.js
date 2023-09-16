// https://leetcode.com/problems/word-pattern/

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

const wordPattern = (pattern, s) => {
  let stringPattern = "";
  const modifiedString = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    stringPattern += s[i][0];
  }

  return stringPattern;
};

console.log(wordPattern("abba", "dog cat cat dog"));
