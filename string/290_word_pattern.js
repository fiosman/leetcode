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
  const patternMap = new Map();
  const wordMap = new Map();
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false; // Patterns of different lengths cannot match
  }

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (!patternMap.has(char) && !wordMap.has(word)) {
      patternMap.set(char, word);
      wordMap.set(word, char);
    } else if (patternMap.get(char) !== word || wordMap.get(word) !== char) {
      return false;
    }
  }

  return true;
};
