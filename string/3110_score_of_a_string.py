class Solution:
    def scoreOfString(self, s: str) -> int:
        total_sum = 0
        for i in range(len(s) - 1):
            current_char = s[i]
            adjacent_char = s[i + 1]
            total_sum += abs(ord(current_char) - ord(adjacent_char))
        return total_sum
