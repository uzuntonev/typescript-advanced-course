export class ArrayList<T> {
  private _elements: T[] = Array(this.INITIAL_SIZE);
  private _size: number = 0;
  private _capacity: number = this._elements.length;
  constructor(private INITIAL_SIZE: number) {}
  add(element: T): boolean {
    if (this.isNotEnoughCapacity) {
      this._elements = this.grow();
    }
    this._elements[this._size++] = element;
    return true;
  }
  addByIndex(idx: number, element: T): boolean {
    this.isValidIdx(idx);

    if (this.isNotEnoughCapacity) {
      this._elements = this.grow();
    }
    for (let i = this._size - 1; i >= idx; i--) {
      this._elements[i + 1] = this._elements[i];
    }
    this._elements[idx] = element;
    this._size++;
    return true;
  }

  get(idx: number): T {
    this.isValidIdx(idx);

    return this._elements[idx];
  }

  set(idx: number, element: T): T {
    this.isValidIdx(idx);
    const oldElement: T = this._elements[idx];
    this._elements[idx] = element;

    return oldElement;
  }

  remove(idx: number): T {
    if (this.isEmpty()) {
      throw Error('List is empty');
    }
    this.isValidIdx(idx);
    const existing = this._elements[idx];

    this._elements = this.shiftLeft(idx);
    if (this._capacity / 3 >= this._size) {
      this._elements = this.shrink();
    }
    return existing;
  }

  size(): number {
    return this._size;
  }

  indexOf(element: T): number {
    for (let i = 0; i < this._elements.length; i++) {
      if (this._elements[i] === element) {
        return i;
      }
    }
    return -1;
  }

  contains(element: T): boolean {
    for (let i = 0; i < this._elements.length; i++) {
      if (this._elements[i] === element) {
        return true;
      }
    }
    return false;
  }

  isEmpty() {
    return this._size === 0;
  }

  private isValidIdx(idx: number) {
    if (idx < 0 || idx >= this._elements.length) {
      throw new Error('Index is not valid!');
    }
  }

  private shiftLeft(idx: number) {
    for (let i = idx; i < this._size; i++) {
      this._elements[i] = this._elements[i + 1];
    }
    this._size--;
    const copyElements = this._elements.slice(0, this._size);
    const tmp = Array(this._capacity);
    for (let i = 0; i < this._size; i++) {
      tmp[i] = copyElements[i];
    }
    return tmp;
  }

  private grow(): T[] {
    const tmp: T[] = Array(this._capacity * 2);
    for (let i = 0; i < this._capacity; i++) {
      tmp[i] = this._elements[i];
    }
    this._capacity *= 2;
    return tmp;
  }

  private shrink(): T[] {
    this._capacity -= this._size;
    const tmp = Array(this._capacity);
    for (let i = 0; i < this._size; i++) {
      tmp[i] = this._elements[i];
    }
    return tmp;
  }

  private get isNotEnoughCapacity(): boolean {
    return this._size === this._capacity;
  }
}
