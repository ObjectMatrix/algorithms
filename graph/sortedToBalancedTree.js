/**
Definitions:  
Let’s define the meaning of balanced binary search trees.  
A balanced binary tree is a tree whose height is O(log(n)), where n is the number of nodes inside the tree.  
For each node inside the balanced tree, the height of the left subtree **mustn’t** differ by more than one from the height of the right subtree.  

On the other hand, a binary search tree is a binary tree, where the left subtree of each node contains values smaller than the root of the subtree.   
Similarly, the right subtree contains values larger than the root of the subtree.  


Algo1: Top-Down Approach. 
The top-down approach uses a sorted array to create a balanced BST. Therefore, we can access any index inside the array in constant time.  

Algo2: Bottom-Up Approach  
The bottom-up approach uses a linked list to build a balanced BST. 
As a result, we’ll have a pointer to the head of the list and we can only move this pointer forward in constant time.  

Algo1:
A; Sorted Array
L: Left-side of current range
R: Right side of the ciurrent range
Result: The root of the Balanced BST



const topDownBT = (A, L, R) => {
 if(L > R) return null;
 
 let mid = Math.floor((L + R) / 2)
 root.val <- A[mid]
 root.left <- topDownBT(A, L, mid - 1)
 root.right <- topDownBT(A, mid+1, R)
 return root
}
*/
