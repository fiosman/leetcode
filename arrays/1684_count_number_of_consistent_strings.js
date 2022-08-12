/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let consistentStrings = 0;
  for (let i = 0; i < words.length; i++) {
    let broken = false;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        broken = true;
      }
    }
    if (broken) {
      continue;
    } else {
      consistentStrings++;
    }
  }

  return consistentStrings;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
