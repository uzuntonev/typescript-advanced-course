class Box<T> {
  store: T[] = [];
  add(el: T): void {
      this.store = this.store.concat(el)
  }

  remove(): void {
      this.store = this.store.slice(0, this.store.length - 1)
  }

  get count(): number{
    return this.store.length;
  }
}

// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);
// console.log(box);

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
