/** 
* --------------------------------------------
*                   root at 0       root at 1
* --------------------------------------------
* Left child        index*2 + 1     index*2
* Right child       index*2 + 2     index*2 + 1
* Parent            (index-1)/2     index/2  */


function Heap (minmax) {
  this.heapMemory = []
  if(['min', 'max'].includes(minmax)) {
    this.minmax = minmax
  } else {
    throw new Error('Valid parameter is min or max, example new Heap("min")')
  }
}

Heap.prototype.extract = function () {
 const max = this.heapMemory[0];
 this.heapMemory[0] = this.heapMemory.pop();
 this.bubbleUp(0);
 return max;
}

Heap.prototype.insert = function(value) {
  this.heapMemory.push(value)
  this.bubbleUp()
}

Heap.prototype.bubbleUp = function () {
  let index = this.heapMemory.length - 1
  let element = this.heapMemory[index]
  while (index > 0) {
    let parentIndex = (index -1) / 2
    let parent = this.heapMemory[parentIndex]
    if(this.minmax === 'min' && parent <= element) break;
    if(this.minmax === 'max' && parent >= element) break;
    this.heapMemory[parentIndex] = element;
    index = parentIndex;
  }
}

Heap.prototype.bubbleDown = function (index) {
  let left = 2 * index + 1
  let right = 2 * index + 2
  let minmax = index;
  const length = this.heapMemory.length - 1

  if(this.minmax === 'max') {
    if(left <= length && this.heapMemory[left] > this.heapMemory[minmax]) {
      minmax = left;
    }
    if(right <= length && this.heapMemory[right] > this.heapMemory[minmax]) {
      minmax = right;
    }
  }

  if(this.minmax === 'min') {
    if(left <= length && this.heapMemory[left] < this.heapMemory[minmax]) {
      minmax = left;
    }
    if(right <= length && this.heapMemory[right] < this.heapMemory[minmax]) {
      minmax = right;
    }
  }

  if(minmax !== index) {
    [this.heapMemory[minmax], this.heapMemory[index]] = [this.heapMemory[index], this.heapMemory[minmax]];
    this.bubbleDown(minmax);
  }

}