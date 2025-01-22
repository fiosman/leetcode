from typing import List
from collections import Counter
import heapq


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency_map = Counter(nums)
        negated_frequencies = [(-freq, num) for num, freq in frequency_map.items()]
        heapq.heapify(negated_frequencies)
        top_k = []
        for _ in range(k):
            top_k.append(heapq.heappop(negated_frequencies)[1])
        return top_k
