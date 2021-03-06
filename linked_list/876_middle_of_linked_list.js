// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// Example 2:

// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

const Node = require("./linked_list_implement").Node;

const middleNode = (head) => {
  const midIdx = getMidIdx(head);
  let nodePos = 0;

  while (head) {
    if (nodePos === midIdx) return head;
    nodePos++;
    head = head.next;
  }
};

const getMidIdx = (head) => {
  const hash = {};
  let nodePos = 0;

  while (head) {
    hash[nodePos] = head.val;
    nodePos++;
    head = head.next;
  }
  return nodePos % 2 === 0 ? Math.ceil(nodePos / 2) : Math.floor(nodePos / 2);
};

const node1 = new Node(1);
node1.next = new Node(2);
node1.next.next = new Node(3);
node1.next.next.next = new Node(4);
node1.next.next.next.next = new Node(5);
node1.next.next.next.next.next = new Node(6);
console.log(middleNode(node1));
