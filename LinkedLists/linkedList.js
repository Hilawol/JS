class Node {
  constructor(element) {
    this.element = element;
    this.next = null
  }
  toString() {
    return `${this.element} =>`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNodeLast(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) { //List is empty
      this.head = node; //The first node entered will be the head
      this.size++;
    }
    else { //List has nodes in it
      current = this.head; //current starts at the first node
      while (current.next) {//While current next is not null
        current = current.next; //current now points to the next node. Loop will finish when current is the last node and it points null.
      }
      current.next = node; //adds the node at the end. The last node (current) now point to the new node we created.
      this.size++;
    }
  }

  getFirst() {
    return this.head; //returns null if list is empty
  }

  getLast() {
    let current = this.head;
    if (current) { //if list is not empty
      while (current.next) {
        current = current.next;
      }
      return current; //the last node.
    }
    return null; //the list is empty
  }

  draw() {
    let current = this.head;
    let log = "";
    if (current) { //if list is not empty
      while (current.next) {
        log += current.toString();
        current = current.next;
      }
      log += current.toString() + "null"; //adds the last node 
    }
    return log;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    if (current) { //list is not empty
      while (current.next) {
        next = current.next; //remembers the next node
        current.next = prev; //replace the "arrow" to point to the node before
        prev = current;
        current = next; //continue to the next node
      }
      current.next = prev;// deals with the last node. 
      this.head = current; //sets the last node to be first 
    }
  }

  removeKNode(k) {
    if (this.size > 0 && k <= this.size) { //list is not empty and has k elements
      if (k == 1) {
        this.head = this.head.next;
        this.size--;
      }
      else {
        let current = this.head;
        let prev;
        for (let i = 1; i < k; i++) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next; //current now is the node to remove
        this.size--;
        current.next = null; ‎
      }
    }
  }

  makeTheListCircular() {
    this.getLast().next = this.head;
  }

  static circularLinkedLinst(list) {
    let visitedNodes = [];
    let current = list.head;
    if (list.head && list.size > 0) {
      while (current.next) {
        if (visitedNodes.includes(current)) {
          return true;
        }
        else {
          visitedNodes.push(current);
          current = current.next;
        }
      }
      return visitedNodes.includes(current) ? false : true;
    }
  }
}



let myList = new LinkedList();
myList.addNodeLast(1);
myList.addNodeLast(2);
myList.addNodeLast(3);
myList.addNodeLast(4);
console.log(myList.draw());
myList.removeKNode(4);
console.log(myList.draw());
myList.makeTheListCircular();
console.log(LinkedList.circularLinkedLinst(myList));




