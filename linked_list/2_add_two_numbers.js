// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const Node = require("./linked_list_implement").Node;

const addTwoNumbers = (l1, l2) => {
  let l3 = new Node(null);
  let sum = 0;
  let carry = 0;

  while (l1 && l2) {
    let sum = l1.val + l2.val;
    if (sum / 10 >= 1) {
    } else {
      l3.val = sum;
    }
  }
  return l3;
};

const node1 = new Node(2);
node1.next = new Node(4);
node1.next.next = new Node(3);
const node2 = new Node(5);
node2.next = new Node(6);
node2.next = new Node(4);
