// https://leetcode.com/problems/first-unique-character-in-a-string/

const firstUniqChar = (s) => {
  let charFreqs = {};

  for (let i = 0; i < s.length; i++) {
    if (charFreqs[s[i]]) {
      charFreqs[s[i]] += 1;
    } else {
      charFreqs[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (charFreqs[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
