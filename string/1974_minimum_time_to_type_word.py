class Solution:
    def minTimeToType(self, word: str) -> int:
      total_seconds = min(abs(ord(word[0]) - ord('a')), 26 - abs(ord(word[0]) - ord('a'))) + 1
      for i in range(1, len(word)):
        moves = min(abs(ord(word[i]) - ord(word[i - 1])), 26 - abs(ord(word[i]) - ord(word[i - 1])))
        total_seconds += moves + 1
      
      return total_seconds