const { Node } = require("./linked_list_implement");

// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

const isPalindrome = (head) => {
  let arr = [];
  let curr = head;

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] != arr[end]) return false;
    start++;
    end--;
  }

  return true;
};

const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(2);
node.next.next.next = new Node(1);
console.log(isPalindrome(node));
