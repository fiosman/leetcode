class Solution:
    def romanToInt(self, s: str) -> int:
      total = 0
      vals = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
      for i in range(len(s)): 
        current = vals[s[i]]
        next_value = 0
        if (i + 1 < len(s)): 
          next_value = vals[s[i+1]]
        if (current < next_value): 
          total -= current
        else: 
          total += current
          
      return total