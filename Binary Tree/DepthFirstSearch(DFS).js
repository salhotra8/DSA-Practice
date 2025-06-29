import { TreeNode } from "./TreeNode";

function preOrderTraversal(node) {
  if (!node) return;

  console.log(node.val);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function inOrderTraversal(node) {
  if (!node) return;

  inOrderTraversal(node.left);
  console.log(node.val);
  inOrderTraversal(node.right);
}

function postOrderTraversal(node) {
  if (!node) return;

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.val);
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("--- Pre-order Traversal (Root, Left, Right) ---");
preOrderTraversal(root); // Expected: 1, 2, 4, 5, 3

console.log("\n--- In-order Traversal (Left, Root, Right) ---");
inOrderTraversal(root); // Expected: 4, 2, 5, 1, 3

console.log("\n--- Post-order Traversal (Left, Right, Root) ---");
postOrderTraversal(root); // Expected: 4, 5, 2, 3, 1