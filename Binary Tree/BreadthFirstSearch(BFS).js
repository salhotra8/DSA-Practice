import { TreeNode } from "./TreeNode";

function levelOrderTraversal(node) {
  if (!node) return;
  let queue = [];

  queue.push(node);

  while (queue.length) {
    let current = queue.shift();
    console.log(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log("--- Level Order Traversal ---");
levelOrderTraversal(root); // Expected Output: 3, 9, 20, 15, 7