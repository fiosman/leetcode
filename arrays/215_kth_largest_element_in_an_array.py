import heapq
from typing import List


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        negated_array = [-num for num in nums]
        heapq.heapify(negated_array)

        kth_largest = 0
        for _ in range(k):
            kth_largest = -heapq.heappop(negated_array)
        return kth_largest
