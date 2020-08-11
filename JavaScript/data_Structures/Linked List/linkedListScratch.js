// add a method prepend() to the linked list that adds a node to the beginning of the list

// 1 --> 10 --> 99 --> 5 --> 16

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value){
  // Check parameters
    if(index === 0){
      this.prepend(value);
      return this.printList();
    } else if(index >= this.length){
      this.append(value);
      return this.printList();
    }

    // Insert code 
    let newNode = new Node(value);
    const leader = this.traversToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traversToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
       //console.log("Node :", counter, currentNode)
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);myLinkedList.prepend(1);
myLinkedList.insert(2,99);




