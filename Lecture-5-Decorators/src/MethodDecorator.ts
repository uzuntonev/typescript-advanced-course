interface IAnimal {
  name: string;
  type: string;
}

abstract class Animal implements IAnimal {
  constructor(public name: string, public type: string) {}
  abstract action(value: string): string;
}

function MethodDecorator() {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalFn = descriptor.value;
    descriptor.value = function( ...value: any[]) {
        console.log(`My arguments are ${value}`);
        return originalFn.call(target, ...value)
    };
    return descriptor
  };
}

class Dog extends Animal {
  constructor(name: string, type: string) {
    super(name, type);
  }

 @MethodDecorator() action(value: string) {
    return `${this.constructor.name} is ${value}`;
  }
}

const x = new Dog("Bruno", "Corgi");

console.log(x.action("bark"));
