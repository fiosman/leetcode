// https://leetcode.com/problems/count-items-matching-a-rule/

const countMatches = (items, ruleKey, ruleValue) => {
  const rules = {
    type: 0,
    color: 1,
    name: 2,
  };
  let matchCount = 0;

  for (let i = 0; i < items.length; i++) {
    const index = rules[ruleKey];

    if (items[i][index] === ruleValue) {
      matchCount++;
    }
  }

  return matchCount;
};

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "type";
const ruleValue = "phone";

console.log(countMatches(items, ruleKey, ruleValue));
