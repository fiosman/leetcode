from collections import Counter
import heapq


class Solution:
    def frequencySort(self, s: str) -> str:
        map = Counter(s)
        negated_frequencies = [(-freq, char) for char, freq in map.items()]
        heapq.heapify(negated_frequencies)

        sorted_str = ""
        while negated_frequencies:
            popped = heapq.heappop(negated_frequencies)
            sorted_str += popped[1] * -popped[0]
        return sorted_str
