// https://leetcode.com/problems/add-binary/

// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a, b) {
  const decSum = parseInt(a, 2) + parseInt(b, 2);
  return decSum.toString(2);
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
