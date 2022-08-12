// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxNumOfWords = 0;

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i] && sentences[i].length > 0) {
      const currentSum = sentences[i].split(" ").length;
      if (currentSum > maxNumOfWords) {
        maxNumOfWords = currentSum;
      }
    }
  }

  return maxNumOfWords;
};

const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
console.log(mostWordsFound(sentences));
