from typing import List


class Solution:
    def reverseString(self, s: List[str]) -> None:
        pointer_start = 0
        pointer_end = len(s) - 1

        while pointer_start < pointer_end:
            s[pointer_start], s[pointer_end] = (
                s[pointer_end],
                s[pointer_start],
            )
            pointer_start += 1
            pointer_end -= 1
