import { ArrayList } from './ArrayList';
import { Stack } from './Stack';
import { Queue } from './Queue';
import { List } from './List';
import { Tree } from './Tree';

const arrayList = new ArrayList<number>(4);
const stack = new Stack<number>();
const queue = new Queue<number>();
const list = new List<number>();

const tree = new Tree<number>(
  7,
  new Tree<number>(
    19,
    new Tree<number>(1),
    new Tree<number>(12),
    new Tree<number>(31)
  ),
  new Tree<number>(21),
  new Tree<number>(14, new Tree<number>(23), new Tree<number>(6))
);

tree.addChild(
  12,
  new Tree<number>(28, new Tree<number>(25), new Tree<number>(36))
);


// tree.removeNode(7)
tree.swapNode(21, 12)
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
