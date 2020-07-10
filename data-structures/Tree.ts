import { Queue } from './Queue';
export class Tree<T> {
  private parent: Tree<T> | null = null;
  private children: Tree<T>[] = [];
  constructor(private value: T, ...children: Tree<T>[]) {
    this.children = children;
    for (const child of this.children) {
      child.parent = this;
    }
  }

  bfs(element: T): Tree<T> | null {
    const queue = new Queue<Tree<T>>();
    let tree: Tree<T> = this;
    queue.offer(tree);
    while (!queue.isEmpty()) {
      const current = queue.poll();
      if (current.value === element) {
        return current;
      }
      for (const child of current.children) {
        queue.offer(child);
      }
    }
    return null;
  }

  dfs(element: T): Tree<T> | null {
    const foundTree = this.findDfs(this, element);
    if (foundTree?.value === element) {
      return foundTree;
    }
    return null;
  }

  addChild(key: T, child: Tree<T>) {
    const search = this.bfs(key);
    if (!search) {
      throw new Error('Node is not found !');
    }
    child.parent = search;
    search.children.push(child);
  }

  removeNode(key: T) {
    const toRemove = this.dfs(key);
    if (!toRemove) {
      throw new Error('Node is not found !');
    }
    const parent = toRemove.parent;
    if (parent === null) {
      toRemove.children = [];
      toRemove.value = null as any;
      return;
    }
    for (const child of toRemove.children) {
        child.parent = null;
    }
    toRemove.children = []
    toRemove.parent = null;
    const index = parent.children.indexOf(toRemove);
    parent.children.splice(index, 1);
  }

  swapNode(firstKey: T, secondKey: T) {
    const firstNode = this.bfs(firstKey);
    const secondNode = this.bfs(secondKey);
    if (!firstNode || !secondNode) {
      throw new Error('Node is not found!');
    }
    const firstParent = firstNode.parent;
    const secondParent = secondNode.parent;
    if (!firstParent || !secondParent) {
      throw new Error('Can not swap with root Node');
    }

    const firstIndex = firstParent.children.indexOf(firstNode);
    const secondIndex = secondParent.children.indexOf(secondNode);

    firstParent?.children.splice(firstIndex, 1, secondNode);
    secondNode.parent = firstParent;

    secondParent?.children.splice(secondIndex, 1, firstNode);
    firstNode.parent = secondParent;
  }

  private findDfs(tree: Tree<T>, element: T): Tree<T> | null {
    if (tree.value === element) {
      return tree;
    }
    for (const child of tree.children) {
      const found = this.findDfs(child, element);
      if (found) {
        return found;
      }
    }
    return null;
  }
}

// function bfs<T>(tree: Tree<T>, element: T): Tree<T> | null {
//   const queue = new Queue<Tree<T>>();
//   queue.offer(tree);
//   while (!queue.isEmpty()) {
//     const current = queue.poll();
//     if (current.value === element) {
//       return current;
//     }
//     for (const child of current.children) {
//       queue.offer(child);
//     }
//   }
//   return null;
// }

// function dfs<T>(tree: Tree<T>, element: T): Tree<T> | null {
//   if (tree.value === element) {
//     return tree;
//   }
//   for (const child of tree.children) {
//     const foundTree = dfs(child, element);
//     if (foundTree) {
//       return foundTree;
//     }
//   }
//   return null;
// }
