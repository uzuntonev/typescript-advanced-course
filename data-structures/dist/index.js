"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayList_1 = require("./ArrayList");
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var List_1 = require("./List");
var Tree_1 = require("./Tree");
var arrayList = new ArrayList_1.ArrayList(4);
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
var list = new List_1.List();
var tree = new Tree_1.Tree(7, new Tree_1.Tree(19, new Tree_1.Tree(1), new Tree_1.Tree(12), new Tree_1.Tree(31)), new Tree_1.Tree(21), new Tree_1.Tree(14, new Tree_1.Tree(23), new Tree_1.Tree(6)));
tree.addChild(12, new Tree_1.Tree(28, new Tree_1.Tree(25), new Tree_1.Tree(36)));
// tree.removeNode(7)
tree.swapNode(21, 12);
console.log(tree);
// console.log(tree.dfs(21));
// console.log(bfs(tree, 12))
// console.log(dfs(tree,12));
// list.addFirst(1);
// list.addFirst(2);
// list.addFirst(3);
// list.addLast(5);
// list.addLast(6);
// list.removeLast();
// list.removeLast();
// list.removeLast();
// list.removeLast();
// console.log(list.getFirst());
// console.log(list.getLast());
// for (const node of list) {
//   console.log(node);
// }
// queue.offer(1)
// queue.offer(2)
// queue.offer(3)
// queue.offer(4)
// queue.poll()
// queue.poll()
// for (const node of queue) {
//     console.log(node?.value);
// }
// stack.push(5);
// stack.push(3);
// stack.push(4);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// stack.push(3);
// stack.push(4);
// stack.push(7);
// stack.push(8);
// for (const node of stack) {
//   console.log('Stack-> ', node?.value);
// }
//# sourceMappingURL=index.js.map