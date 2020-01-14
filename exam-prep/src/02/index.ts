interface IEmployee {
  name: string;
  age: number;
  salary: number;
  tasks: string[];
  work(): string;
  collectSalary(): string;
}

abstract class Employee implements IEmployee {
  salary = 0;
  tasks: string[] = [];
  constructor(public name: string, public age: number) {}

  work() {
    return this.name + this.tasks.shift();
  }
  collectSalary() {
    return `${this.name} received `;
  }
}

class Junior extends Employee {
  tasks = [` is working on a simple task.`];
  constructor(public name: string, public age: number) {
    super(name, age);
  }
  collectSalary() {
    return super.collectSalary() + `${this.salary} this month.`;
  }
}

class Senior extends Employee {
  tasks = [
    ` is working on a complicated task.`,
    "is taking time off work.",
    "is supervising junior workers."
  ];
  constructor(public name: string, public age: number) {
    super(name, age);
  }
  collectSalary() {
    return super.collectSalary() + `${this.salary} this month.`;
  }
}

class Manager extends Employee {
  tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
  dividend = 0;
  constructor(public name: string, public age: number) {
    super(name, age);
  }
  collectSalary() {
    return super.collectSalary() + `${this.salary + this.dividend} this month.`;
  }
}
const j = new Junior("Gosho", 31);
const s = new Senior("Georgi", 21);
const m = new Manager("Uzuntonev", 32);
console.log(j.work());
console.log(j.collectSalary());
console.log(s.work());
console.log(s.work());
console.log(s.work());
