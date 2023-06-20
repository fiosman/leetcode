// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

var checkIfPangram = function (sentence) {
  const uniqueSentence = new Set(sentence);

  if (uniqueSentence.size < 26) {
    return false;
  } else {
    return true;
  }
};
