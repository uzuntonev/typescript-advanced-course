"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
//# sourceMappingURL=index.js.map