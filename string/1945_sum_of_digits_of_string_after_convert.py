class Solution:
    def getLucky(self, s: str, k: int) -> int:
        converted_str = ""
        for i in range(len(s)):
            converted_str += str(ord(s[i]) - ord("a") + 1)

        i = 0
        final_sum = int(converted_str)
        while i < k:
            final_sum = sum(map(int, str(final_sum)))
            i += 1
        return final_sum
