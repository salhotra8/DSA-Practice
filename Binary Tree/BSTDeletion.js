import { TreeNode } from "./TreeNode";

function deleteNode(value, node) {
  if (node === null) {
    return null; // Base Case: Value not found, or reached end of a branch
  }

  // Traverse the tree to find the node to be deleted
  if (value < node.value) {
    node.left = deleteNode(value, node.left); // Go left if value is smaller
    return node; // Return the (potentially modified) current node
  } else if (value > node.value) {
    node.right = deleteNode(value, node.right); // Go right if value is larger
    return node; // Return the (potentially modified) current node
  } else {
    // Found the node to be deleted (value === node.value)

    // Case 1: Node has 0 or 1 child
    if (node.left === null) {
      // If no left child, return the right child (which could be null for a leaf node)
      return node.right;
    }
    if (node.right === null) {
      // If no right child, return the left child
      return node.left;
    }

    // Case 3: Node has two children
    // Find the in-order successor (smallest node in the right subtree)
    const tempNode = findInOrderSuccessor(node.right); // Correctly calls findNode (findMinNode)

    // Copy the in-order successor's value to the current node
    node.value = tempNode.value;

    node.right = deleteNode(tempNode.value, node.right);

    // Return the current node (now with the successor's value, and the successor itself deleted from its original spot)
    return node;
  }
}
 
function findInOrderSuccessor(node) {
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
}
