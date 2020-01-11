"use strict";
/// <reference path="Greeter.ts" />
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduction = function () {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
    };
    Person.prototype.sayGoodbye = function (name) {
        return "Dear " + name + ", it was a pleasure meeting you!";
    };
    return Person;
}());
var p = new Person("Ivan Ivanov", 25);
console.log(p.introduction());
console.log(p.sayGoodbye("Petar Petrov"));
//# sourceMappingURL=index.js.map