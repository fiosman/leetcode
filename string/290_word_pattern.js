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
  for (let i = 0; i < modifiedString.length; i++) {
    stringPattern += modifiedString[i][0];
    continue;
  }

  return stringPattern;
};

const generatePattern = (string) => {
  let resPattern = "";
  for (let i = 0; i < string.length; i++) {
    if (string.substring(i + 1, string.length).indexOf(string[i]) > -1) {
      resPattern += "1";
    } else {
      resPattern += "0";
    }
  }

  console.log(resPattern);
};

return generatePattern("abba");
