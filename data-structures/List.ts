import { Node } from './Node';

export class List<T> {
  private _size: number = 0;
  private _head: Node<T> = null as any;
  private _last: Node<T> = null as any;

  addFirst(element: T) {
    const toAddfirst = new Node(element);
    if (this.isEmpty()) {
      this._last = toAddfirst;
    }
    toAddfirst.next = this._head;
    this._head = toAddfirst;
    this._size++;
  }

  addLast(element: T) {
    const toAddLast = new Node(element);
    if (this.isEmpty()) {
      this._head = toAddLast;
    }
    this._last.next = toAddLast;
    this._last = toAddLast;
    this._size++;
  }

  removeFirst(): T {
    if (this.isEmpty()) {
      throw new Error('List is empty !');
    }
    const toRemove = this._head;
    if (this._size === 1) {
      this._head = null as any;
    } else {
      this._head = toRemove.next;
    }
    this._size--;
    return toRemove.value;
  }

  removeLast(): T {
    const toRemove = this._last;
    let first = this._head;
    let preLast: Node<T> = first;

    while (first.next) {
      preLast = first;
      first = first.next;
    }

    preLast.next = null as any;
    this._last = preLast;
    this._size--;
    return toRemove.value;
  }

  getFirst(): T {
    if (this.isEmpty()) {
      throw new Error('List is empty !');
    }
    return this._head.value;
  }
  getLast() {
    if (this.isEmpty()) {
      throw new Error('List is empty !');
    }
    return this._last.value;
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
