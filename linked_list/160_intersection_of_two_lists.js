// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.

const { Node } = require("./linked_list_implement");

// For example, the following two linked lists begin to intersect at node c1:

// It is guaranteed that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

// Example 2:

// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3:

// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

const getIntersectionNode = (headA, headB) => {
  const headALength = getNodeLength(headA);
  const headBLength = getNodeLength(headB);
  const lengthDiff =
    headALength > headBLength
      ? headALength - headBLength
      : headBLength - headALength;

  let firstHeadA;
  let firstHeadB;

  if (headALength < headBLength) {
    firstHeadA = headA;

    for (let i = 0; i < lengthDiff; i++) {
      firstHeadB = headB.next;
    }
  } else if (headBLength < headALength) {
    firstHeadB = headB;
    for (let i = 0; i < lengthDiff; i++) {
      firstHeadA = headA.next;
    }
  } else {
    firstHeadA = headA;
    firstHeadB = headB;
  }

  while (firstHeadA) {
    if (firstHeadA === firstHeadB) return firstHeadB;
    firstHeadA = firstHeadA.next;
    firstHeadB = firstHeadB.next;
  }
  return null;
};

const getNodeLength = (head) => {
  let nodeLength = 0;

  while (head) {
    nodeLength++;
    head = head.next;
  }

  return nodeLength;
};

const head1 = new Node(4);
head1.next = new Node(1);
head1.next.next = new Node(8);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);

const head2 = new Node(5);
head2.next = new Node(6);
head2.next.next = new Node(1);
head2.next.next.next = new Node(8);
head2.next.next.next.next = new Node(4);
head2.next.next.next.next.next = new Node(5);
console.log(getIntersectionNode(head1, head2));
