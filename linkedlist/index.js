function Node (val){
    this.val = val
    this.prev = null
    this.next = null
}

function DoublyLinkedList () {
    this.length = 0
    this.head = null
    this.tail = null
}

DoublyLinkedList.prototype.push = function(val) {
    if(!val) throw new Error('missing node value')
    const newNode = new Node(val)
    if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
    } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }
    this.length += 1
    return newNode
}

DoublyLinkedList.prototype.pop = function() {
    if(this.length <= 0) {
        return null
    } else {
        const nodeToRemove = this.tail
        if(this.length ===1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            nodeToRemove.prev = null
        }
        this.length -= 1
        return nodeToRemove
    }
    
}

const newDLL = new DoublyLinkedList();
newDLL.push("A");
newDLL.push("B");
newDLL.push("C");
console.log(newDLL);

// console.log(newDLL.pop());
// console.log(newDLL);
