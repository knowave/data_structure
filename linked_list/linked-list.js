class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log('Current Data: ', current.data);
            current = current.next;
        }
    }
}

module.exports = { Node, LinkedList };
