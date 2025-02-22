// Definition for a binary tree node
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the maximum depth of a binary tree
var maxDepth = function (root) {
  if (!root) {
    return 0; // Base case: empty tree has depth 0
  }

  // Recursively calculate depth of left and right subtrees
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  // Maximum depth is the greater of the two, plus the current node
  return Math.max(leftDepth, rightDepth) + 1;
};

// Example Usage
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));
