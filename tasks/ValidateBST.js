/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 */

class Node {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function validate(root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    if (root.value <= min || root.value >= max) return false;

    return validate(root.left, min, root.value) && validate(root.right, root.value, max);

}
