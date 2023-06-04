// https://leetcode.com/problems/find-the-difference-of-two-arrays/

const findDifference = (nums1, nums2) => {
  const nums1IntegersNotPresentInNums2 = [];
  const nums2IntegersNotPresentInNums1 = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1IntegersNotPresentInNums2.includes(nums1[i])) {
      continue;
    }
    if (!nums2.includes(nums1[i])) {
      nums1IntegersNotPresentInNums2.push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2IntegersNotPresentInNums1.includes(nums2[i])) {
      continue;
    }
    if (!nums1.includes(nums2[i])) {
      nums2IntegersNotPresentInNums1.push(nums2[i]);
    }
  }

  return [nums1IntegersNotPresentInNums2, nums2IntegersNotPresentInNums1];
};

console.log(findDifference([1, 2, 3], [4, 5, 6]));
