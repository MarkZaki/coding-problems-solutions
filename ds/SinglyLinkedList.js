class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const createdNode = new Node(value);
    if (!this._headContainsNode()) this._appendFirstNode(createdNode);
    else this._appendToTail(createdNode);
    this.length++;
    return this;
  }

  pop() {
    if (!this._headContainsNode()) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this._isListEmpty()) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  
  unshift(value) {
    const node = new Node(value);
    if (!this._headContainsNode()) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this._headContainsNode()) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this._isListEmpty()) this.tail = null;
    return oldHead;
  }
  
  getValue(index) {
    if (index === 0) return this.head.value;
    if (index === this.length - 1) return this.tail.value;
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current.value;
  }

    getNode(index) {
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    const node = this.getNode(index);
    if(node) return node.value = value;
    else return null;
  }

  _appendFirstNode(node) {
    this.head = node;
    this.tail = this.head;
  }

  _appendToTail(node) {
    this.tail.next = node;
    this.tail = this.tail.next;
  }

  _headContainsNode() {
    return this.head !== null;
  }

  _isListEmpty() {
    return this.length === 0;
  }
}

const list = new SinglyLinkedList();
list.push(1).push(2).push(3).push(4);

console.log(list.shift());

list.unshift(100);

console.log(JSON.stringify(list, 0, 2));


console.log(list.getValue(0));
console.log(list.getValue(3));
console.log(list.getValue(1));
console.log(list.getValue(2));
console.log(list.getValue(4));

console.log(list.set(0, 10));
console.log(list.set(1, 20));
console.log(list.set(2, 30));
console.log(list.set(3, 40));
console.log(list.set(4, 50));

console.log(list.getNode(0));
console.log(list.getNode(3));
console.log(list.getNode(1));
console.log(list.getNode(2));
console.log(list.getNode(4));