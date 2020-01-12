function checkProp (target: any, key: string){
let value: any;
Object.defineProperty(target, key, {
    get(){
       console.log(`I get property ${key}, Value is ${value}`)
       return value;
        
    },
    set(newValue){
        console.log(this);
        value = newValue;
    }
})
}

class Employee {
   @checkProp test: any;
    constructor(public name: string, private salary: number) {
    }
}

const e = new Employee('Pesho', 1000);
e.test = 'hello'