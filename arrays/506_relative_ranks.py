import heapq
from typing import List


class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        map = {}
        score_copy = []
        rankings = []
        for i in range(len(score)):
            score_copy.append(-score[i])
        heapq.heapify(score_copy)

        for i in range(3):
            if score_copy:
                top_score = -heapq.heappop(score_copy)
                if i == 0:
                    map[top_score] = "Gold Medal"
                elif i == 1:
                    map[top_score] = "Silver Medal"
                elif i == 2:
                    map[top_score] = "Bronze Medal"

        rank = 4
        while len(score_copy) > 0:
            top_score = -heapq.heappop(score_copy)
            map[top_score] = rank
            rank += 1

        for i in range(len(score)):
            rankings.append(str(map[score[i]]))

        return rankings
