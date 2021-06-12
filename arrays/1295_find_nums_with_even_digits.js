// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

const findNumbers = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const numOfDigits = Math.floor(Math.log10(nums[i]) + 1);

    if (numOfDigits % 2 === 0) count++;
  }

  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896, 1000]));
