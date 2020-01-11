class Tuple<T, K> {
  constructor(public param1: T, public param2: K) {}
  toString(): string {
    return `${this.param1} -> ${this.param2}`;
  }
}

let n1 = new Tuple("Apples", 10);

console.log(n1.toString());
