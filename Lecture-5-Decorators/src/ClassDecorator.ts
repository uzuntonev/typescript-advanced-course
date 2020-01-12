interface IPeople {
  name: string;
  age: number;
}

function setAdditionInfo(...args: any[]) {
  return function decorateClass<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      setProperties() {
        const keys = Object.keys(args[0]);
        const values: any[] = Object.values(args[0]);
        keys.forEach((x, i) => {
          (this as any)[x] = values[i];
        });
      }
    };
  };
}

@setAdditionInfo({ occupation: "engineer", salary: 2000 })
class Human implements IPeople {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const test = new Human("Gosho", 31);
(test as any).setProperties();
console.log(test);
// occupation:"engineer";
// salary:2000;
