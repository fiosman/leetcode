// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = (nums) => {
  let smallerNumbers = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    smallerNumbers.push(count);
    count = 0;
  }

  return smallerNumbers;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
