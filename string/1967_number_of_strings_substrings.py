from typing import List

class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
      word_count = 0
      for pattern in patterns: 
        if pattern in word: 
          word_count += 1
      return word_count