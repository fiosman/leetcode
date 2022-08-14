/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const largestNum = Math.max(...nums);
  const noZeroArray = nums.filter((num) => num > 0 && num < largestNum);
  for (let i = 0; i < noZeroArray.length; i++) {
    if (largestNum / noZeroArray[i] < 2) {
      return -1;
    }
  }
  return nums.indexOf(largestNum);
};

const nums = [1, 2, 3, 4];
console.log(dominantIndex(nums));
