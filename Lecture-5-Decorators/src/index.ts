const schema = {
  "Name length": (name: string) => name.length > 3,
  "Is adult": (age: string) => +age >= 18
};

function debugLogging(target: any, key: string, descriptor?: PropertyDescriptor): any {
    if (descriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        const result = originalMethod(...args);
        console.log(`Args: ${args} and result is ${result}`);
        return result;
      }
      return descriptor;
    }
    let _val: any;
    Object.defineProperty(target, key, {
      set(newValue) {
        console.log(`Old value: ${_val}, New value: ${newValue}`, this);
        _val = newValue;
      },
      get() {
        return _val;
      }
    });
  }

function Validate( value: { [key: string]: (value: string) => boolean }) {
  return function(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
  ): any {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = originalMethod(...args);
      console.log(`Args: ${args} and result is ${result}`);
      return result;
    }
    return descriptor;
  };
}

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    newName = "override";
    doSomething() {
      //   console.log(`I do something!`);
    }
  };
}

interface IBase {
  name: string;
  age: number;
  sayHello(): string;
  [key: string]: any;
}

@classDecorator
class Person implements IBase {
   @debugLogging test: any;
   @debugLogging name: string;
  constructor(name: string, public age: number) {
      this.name = name
  }
  sayHello() {
    return `Hello ! My name is ${this.name}`;
  }
  @Validate(schema)
  getName(value1: string, value2: string) {
    return value1 + value2
  }
}

const a = new Person("Pesho", 22);
// const b = new Person("P", 33);
// a.getName('foo', 'bar')
a.test = 'buz'