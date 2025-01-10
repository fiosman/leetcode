class Solution:
    def isPalindrome(self, s: str) -> bool:
      alpha_string = ""
      for char in s: 
        if char.isalnum():
           alpha_string += char.lower()
      reversed_string = alpha_string[::-1]
      if reversed_string == alpha_string: 
        return True
      else: 
        return False
