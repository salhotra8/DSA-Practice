import { TreeNode } from "./TreeNode";

/**
 * 
 * @param {number} value 
 * @param {TreeNode} node 
 */

function insertNode(value, node) {
    if(node === null) {
        return new TreeNode(value);
    }

    // Handle duplicates: if key already exists, simply return the current node
    if(node.value === value) {
        return node
    }

    if(node.value > value) {
        node.left = insertNode(value, node.left)
    }

    if(node.value < value) {
        node.right = insertNode(value, node.right)
    }

    return node
}

// --- Example Usage ---

let root = null;

root = insertNode(50, root);
insertNode(30, root);
insertNode(70, root);
insertNode(20, root);
insertNode(40, root);
insertNode(60, root);
insertNode(80, root);
insertNode(25, root);
insertNode(55, root);
insertNode(70, root); // Duplicate, will not be inserted

// --- Helper for verification (In-order traversal) ---
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        process.stdout.write(`${node.value} `);
        inOrderTraversal(node.right);
    }
}

console.log("BST values (In-order Traversal):");
inOrderTraversal(root);
console.log("\n");

/*
   Visualized Tree:

            50
           /  \
          30   70
         / \   / \
        20 40 60 80
         \   /
          25 55
*/
