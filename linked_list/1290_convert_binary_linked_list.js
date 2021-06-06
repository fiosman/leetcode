// Given head which is a reference node to a singly-linked list.
// The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

const { Node } = require("./linked_list_implement");

// Return the decimal value of the number in the linked list.

// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

// Example 2:
// Input: head = [0]
// Output: 0

// Example 3:
// Input: head = [1]
// Output: 1

// Example 4:
// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880

// Example 5:
// Input: head = [0,0]
// Output: 0

const getDecimalValue = (head) => {
  let nodeExp = getNodeLength(head) - 1;
  let decimal = 0;
  while (head) {
    decimal += head.val * 2 ** nodeExp;
    nodeExp -= 1;
    head = head.next;
  }

  return decimal;
};

const getNodeLength = (head) => {
  let nodeLength = 0;

  while (head) {
    nodeLength++;
    head = head.next;
  }

  return nodeLength;
};

const node = new Node(1);
node.next = new Node(0);
node.next.next = new Node(1);
console.log(getDecimalValue(node));
