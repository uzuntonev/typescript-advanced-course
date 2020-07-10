import { Node } from './Node';

export class Stack<T> {
  private _size: number = 0;
  private _top: Node<T> = null as any;

  push(element: T) {
    const toInsert = new Node(element);
    toInsert.next = this._top;
    this._top = toInsert;
    this._size++;
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const tmp = this._top;
    this._top = tmp.next;
    this._size--;
    return tmp.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this._top.value;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  [Symbol.iterator]() {
    let current = this._top;
    return {
      next() {
        if (!current) {
          return { done: true };
        }
        const tmp = current;
        current = current.next;
        return { value: tmp, done: false };
      },
    };
  }
}
