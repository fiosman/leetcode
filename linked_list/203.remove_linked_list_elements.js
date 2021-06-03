// Given the head of a linked list and an integer val,
// remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

const Node = require("./linked_list_implement").Node;

const removeElements = (head, val) => {
  //O(n) time and O(1) space
  let current = head;

  while (head != null && head.val === val) {
    head = head.next;
  }
  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

const node1 = new Node(6);
node1.next = new Node(2);
node1.next.next = new Node(6);
node1.next.next.next = new Node(4);

console.log(removeElements(node1, 6));
