// https://leetcode.com/problems/sum-of-unique-elements/

const sumOfUnique = (nums) => {
  //O(n) time and O(n) space
  let numsFreq = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsFreq[nums[i]]) {
      numsFreq[nums[i]] += 1;
    } else {
      numsFreq[nums[i]] = 1;
    }
  }

  let count = 0;
  for (let num in numsFreq) {
    if (numsFreq[num] === 1) {
      count += parseInt(num);
    }
  }

  return count;
};

console.log(sumOfUnique([1, 1, 1, 1]));
