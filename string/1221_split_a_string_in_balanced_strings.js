// https://leetcode.com/problems/split-a-string-in-balanced-strings/

const balancedStringSplit = (s) => {
  let numOfL = 0;
  let numOfR = 0;
  let total = 0;

  for (let i = 0; i < s.length + 1; i++) {
    if (numOfL > 0 && numOfR > 0 && numOfL === numOfR) {
      total++;
      numOfL = 0;
      numOfR = 0;
    }
    if (s[i] === "R") {
      numOfR++;
    } else {
      numOfL++;
    }
  }

  return total;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("RLRRRLLRLL"));
