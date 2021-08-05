// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/submissions/

const areOccurencesEqual = (s) => {
  //O(n) time and O(n) space
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]]) {
      freq[s[i]]++;
    } else {
      freq[s[i]] = 1;
    }
  }

  let freqValues = [];
  for (let letter in freq) {
    if (freqValues.length === 0) {
      freqValues.push(freq[letter]);
      continue;
    }
    if (freq[letter] != freqValues[freqValues.length - 1]) {
      return false;
    }
  }
  return true;
};
areOccurencesEqual("abacbc");
