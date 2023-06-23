// https://leetcode.com/problems/third-maximum-number/

var thirdMax = function (nums) {
  const sortedUniqueNumsArray = Array.from(new Set(nums)).sort((a, b) =>
    nums.length >= 3 ? b - a : a - b
  );

  return sortedUniqueNumsArray.length >= 3
    ? sortedUniqueNumsArray[2]
    : sortedUniqueNumsArray[sortedUniqueNumsArray.length - 1];
};
