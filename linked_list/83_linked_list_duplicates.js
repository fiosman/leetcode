//Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
//Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

const Node = require("./linked_list_implement").Node;

const deleteDuplicates = (head) => {
  let curr = head;

  while (curr != null && curr.next != null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
};

const node1 = new Node(1);
node1.next = new Node(1);
node1.next.next = new Node(2);

console.log(deleteDuplicates(node1));
