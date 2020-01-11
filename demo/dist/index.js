"use strict";
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getUserInfo = function (header) {
        return this.name + " " + this.age + " " + header;
    };
    return User;
}());
var username = ["1"];
var x = new User("gosho", 12);
var a = x.getUserInfo(["ff"]);
console.log(a);
var Operations;
(function (Operations) {
    Operations["ADD"] = "addd";
    Operations["MULT"] = "mult";
    Operations["LARGEST"] = "larg";
})(Operations || (Operations = {}));
console.log(Operations.ADD);
