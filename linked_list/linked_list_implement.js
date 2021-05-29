// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {}

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
      this.length++;
      return this;
    }
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removedNode;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.val === target) {
        return true;
      } else {
        currNode = currNode.next;
      }
    }

    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    let currPos = 0;
    let currNode = this.head;

    while (currNode) {
      if (currPos === index) {
        return currNode;
      } else {
        currPos++;
        currNode = currNode.next;
      }
    }

    return null;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index === 0) return this.addToHead(val);
    if (index === this.length) return this.addToTail(val);

    if (index < this.length - 1) {
      const newNode = new Node(val);
      const nodeBeforeNew = this.get(index - 1);
      const nodeAfterNew = this.get(index + 1);

      nodeBeforeNew.next = newNode;
      newNode.next = nodeAfterNew;
      this.length++;
    } else {
      return false;
    }
  }

  // TODO: Implement the remove method here
  remove(index) {}

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

const node1 = new Node(5);
const node2 = new Node(6);
const node3 = new Node(7);

const linkedList = new LinkedList();
linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.insert(2, 3);
console.log(linkedList);
