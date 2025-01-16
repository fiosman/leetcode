from typing import List


class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums2_set = set(nums2)
        results_set = set()
        for ele in nums1:
            if ele in nums2_set:
                results_set.add(ele)
        return list(results_set)
