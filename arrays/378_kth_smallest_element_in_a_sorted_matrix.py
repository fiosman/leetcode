from typing import List
import heapq


class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        flattened = [item for sublist in matrix for item in sublist]
        heapq.heapify(flattened)

        for _ in range(k):
            min = heapq.heappop(flattened)
        return min
