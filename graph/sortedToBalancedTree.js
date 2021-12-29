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

// A binary tree node
class Node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}
 
let root = null;
 
/* A function that constructs Balanced Binary Search Tree 
 from a sorted array */
function sortedArrayToBST(arr, start, end)
{
    /* Base Case */
    if (start > end)
    {
        return null;
    }
    /* Get the middle element and make it root */
    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);
    /* Recursively construct the left subtree and make it left child of root */
    node.left = sortedArrayToBST(arr, start, mid - 1);
    /* Recursively construct the right subtree and make it right child of root */
    node.right = sortedArrayToBST(arr, mid + 1, end);
    return node;
}
/* A utility function to print preorder traversal of BST */
function preOrder(node)
{
    if (node == null)
    {
        return;
    }
    console.log(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}
 
 
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
root = sortedArrayToBST(arr, 0, n - 1);

preOrder(root);
