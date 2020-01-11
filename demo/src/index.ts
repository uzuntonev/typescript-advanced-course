class User {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getUserInfo(header?: string | string[]) {
    return `${this.name} ${this.age} ${header}`;
  }
}
const username: string[] = ["1"];

const x = new User("gosho", 12);
const a = x.getUserInfo(["ff"]);

console.log(a);

enum Operations {
    ADD =  'addd',
    MULT = 'mult',
    LARGEST = 'larg'
}
console.log(Operations.ADD);