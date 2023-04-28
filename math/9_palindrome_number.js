// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (number) => {
  let newString = "";
  const convertedString = String(number);
  for (let i = convertedString.length - 1; i >= 0; i--) {
    newString += convertedString[i];
  }
  return newString === convertedString;
};
