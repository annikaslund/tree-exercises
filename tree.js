/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let stack = [this.root];
    let total = 0;

    if (this.root === null) return total;

    while (stack.length){
      let currNode = stack.pop();

      total += currNode.val;

      for (let child of currNode.children){
        stack.push(child);
      }
    }

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let stack = [this.root];
    let total = 0;

    if (this.root === null) return total;

    while (stack.length){
      let currNode = stack.pop();

      if (currNode.val % 2 === 0){
        total += 1;
      }

      for (let child of currNode.children){
        stack.push(child);
      }
    }

    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
