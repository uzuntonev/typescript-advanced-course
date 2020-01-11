class CompareElements<T> {
  constructor(public items: T[]) {}
  compare(element: T): number {
    return  this.items.filter(x => x === element).length;
  }
}

// let c = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);

// console.log(c.compare("b"));

let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c.compare(1));
