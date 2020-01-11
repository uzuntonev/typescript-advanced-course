class Threeuple<T, K, M> {
    constructor(public param1: T, public param2: K, public param3: M) {
        
    }
    toString(): string{
        return `${this.param1} -> ${this.param2} -> ${this.param3}`
    }
}

let n = new Threeuple ('Hello World', [1], 312);

console.log(n.toString());
