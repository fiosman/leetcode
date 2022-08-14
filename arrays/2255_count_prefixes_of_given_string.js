/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) {
      count++;
    }
  }

  return count;
};

const words = [
  "feh",
  "w",
  "w",
  "lwd",
  "c",
  "s",
  "vk",
  "zwlv",
  "n",
  "w",
  "sw",
  "qrd",
  "w",
  "w",
  "mqe",
  "w",
  "w",
  "w",
  "gb",
  "w",
  "qy",
  "xs",
  "br",
  "w",
  "rypg",
  "wh",
  "g",
  "w",
  "w",
  "fh",
  "w",
  "w",
  "sccy",
];

const chars = "w";

console.log(countPrefixes(words, chars));
