//Objective is to continuously delete n nodes after m nodes in a linked list until
//the end of the list is reached

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(6)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next = new Node(6)

let m = 2
let n = 2


//O(n) solution that traverses each node in the list once

let curr = head
    
while (curr) {
    let count = m - 1  
    while (count && curr) {
        curr = curr.next
        count--
    }
    
    let count2 = n + 1
    let temp = curr
    while (count2 && curr) {
        curr = curr.next 
        count2--
    }
    
    if (temp) {
        temp.next = curr    
    }
}

return head