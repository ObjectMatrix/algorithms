  /**
   * insert method:
   * 1. push value to the heap (last)
   * 2. invoke bubbleUp method also known as also known as percolate-up, 
   *    sift-up, trickle-up, swim-up, heapify-up, or cascade-up
   * 2a. Bubble Up method:
   *     index = initialize with last index
   *     while(index > zero) declare three variables, parent, parent Index, element
   *     If(parent >= element) break the loop
   *     swaap (parent, element)
   * --------------------------------------------
   *                   root at 0       root at 1
   * --------------------------------------------
   * Left child        index*2 + 1     index*2
   * Right child       index*2 + 2     index*2 + 1
   * Parent            (index-1)/2     index/2  

  * extract (extract Max/Min)
  * It helps us to remove the highest (lowest) element from the heap
  * The procedure for deleting the root from the heap and restoring
  * the properties is called sink-down, aka, bubble-down, percolate-down,
  * sift-down, down-heap, trickle down, heapify-down, cascade-down,
  * and extract-min/max
  * Extract algorithm:
  *  - declare a variable called max and initialize with the first element in the heap
  *  - update first element in the heap with the last element
  *  - run sink down method
  *  - return max
  */
class BinaryHeap {
  constructor(minmax) {
    this.heap = []
    this.minmax = 'max'
    if(['min', 'max'].includes(minmax)) {
      this.minmax = minmax
    } else {
      throw new Error('Valid parameter is min or max, example new binaryHeap("min")')
    }
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  //using iterative approach
  bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      let element = this.heap[index]
      let  parentIndex = Math.floor((index - 1) / 2)
      let  parent = this.heap[parentIndex]

      if (this.minmax === 'max' && parent >= element) break
      if (this.minmax === 'min' && parent <= element) break
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  extract() {
    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.sinkDown(0)
    return max
  }

  sinkDown(index) {
    let left = 2 * index + 1
    let  right = 2 * index + 2
    let  minmax = index
    const length = this.heap.length
    // Max heap
    if(this.minmax === 'max') {
      if (left <= length && this.heap[left] > this.heap[minmax]) {
        minmax = left
      }
      if (right <= length && this.heap[right] > this.heap[minmax]) {
        minmax = right
      }
    }
    // Min heap
    if(this.minmax === 'min') {
      if (left <= length && this.heap[left] < this.heap[minmax]) {
        minmax = left
      }
      if (right <= length && this.heap[right] < this.heap[minmax]) {
        minmax = right
      }
    }
    // swap
    if (minmax !== index) {
      [this.heap[minmax], this.heap[index]] = [
        this.heap[index],
        this.heap[minmax],
      ]
      this.sinkDown(minmax)
    }
  }
}

const heapType = 'max'
// const heapType = 'min'
let heap = new BinaryHeap(heapType)
heap.insert(100)
heap.insert(90)
heap.insert(80)
heap.insert(70)
heap.insert(50)

console.log(heap.minmax)
console.log(heap.extract())