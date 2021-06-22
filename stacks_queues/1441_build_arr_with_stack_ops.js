// https://leetcode.com/problems/build-an-array-with-stack-operations/

const buildArray = (target, n) => {
  //O(n) space and O(n) time
  let outputArr = [];
  let targetLength = target.length;
  for (let i = 1; i <= n; i++) {
    if (targetLength === 0) break;
    if (!target.includes(i)) {
      outputArr.push("Push", "Pop");
    } else {
      outputArr.push("Push");
      targetLength--;
    }
  }

  return outputArr;
};

console.log(buildArray([2, 3, 4], 4));
