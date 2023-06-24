// https://leetcode.com/problems/third-maximum-number/

var thirdMax = function (nums) {
  let uniqueNumsArray = Array.from(new Set(nums));

  if (uniqueNumsArray.length >= 3) {
    uniqueNumsArray = uniqueNumsArray.sort((a, b) => b - a);
  } else {
    uniqueNumsArray = uniqueNumsArray.sort((a, b) => a - b);
  }

  return uniqueNumsArray.length >= 3
    ? uniqueNumsArray[2]
    : uniqueNumsArray[uniqueNumsArray.length - 1];
};
