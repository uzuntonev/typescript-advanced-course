import { Node } from './Node';

export class Queue<T> {
  private _size: number = 0;
  private _head: Node<T> = null as any;

  offer(element: T): void {
    const toInsert = new Node(element);
    if (this.isEmpty()) {
      this._head = toInsert;
      this._size++;
      return;
    }
    let current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = toInsert;
    this._size++;
  }

  poll(): T {
    if (this.isEmpty()) {
      throw Error('Queue is empty !');
    }
    let current = this._head;
    if (this._size === 1) {
      this._head = null as any;
    }
    this._head = current.next;
    this._size--;
    return current.value;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty !');
    }
    return this._head.value;
  }

  size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  [Symbol.iterator]() {
    let current = this._head;
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
