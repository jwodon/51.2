class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */

    insert(val) {
        // Create a new node
        const newNode = new Node(val);

        // If the tree is empty, set the new node as the root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        // Start from the root and find the correct position
        let current = this.root;
        while (true) {
            if (val < current.val) {
                // Go to the left subtree
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                // Go to the right subtree
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */

    insertRecursively(val, node = this.root) {
        if (this.root === null) {
            this.root = new Node(val);
            return this;
        }

        if (val < node.val) {
            if (node.left === null) {
                node.left = new Node(val);
                return this;
            } else {
                return this.insertRecursively(val, node.left);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(val);
                return this;
            } else {
                return this.insertRecursively(val, node.right);
            }
        }
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */

    find(val) {
        let current = this.root;

        while (current !== null) {
            if (val === current.val) {
                return current;
            } else if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return undefined;
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */

    findRecursively(val, node = this.root) {
        if (node === null) return undefined;
        if (val === node.val) return node;

        if (val < node.val) {
            return this.findRecursively(val, node.left);
        } else {
            return this.findRecursively(val, node.right);
        }
    }

    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */

    dfsPreOrder() {
        let result = [];
        function traverse(node) {
            result.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */

    dfsInOrder() {
        let result = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            result.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */

    dfsPostOrder() {
        let result = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.val);
        }
        traverse(this.root);
        return result;
    }

    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */
    bfs() {
        let result = [];
        let queue = [];
        if (this.root) queue.push(this.root);

        while (queue.length) {
            let node = queue.shift();
            result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }
}

module.exports = BinarySearchTree;
