"use strict";
var Family = /** @class */ (function () {
    function Family() {
        this.family = [];
    }
    Family.prototype.addNewMember = function (member) {
        this.family.push(member);
    };
    Family.prototype.oldestMember = function () {
        var oldest = this.family.sort(function (a, b) { return b[1] - a[1]; })[0];
        var name = oldest[0], age = oldest[1];
        return "The oldest member is " + name + " and is " + age + " years old.";
    };
    return Family;
}());
var member = new Family();
member.addNewMember(["Ivan", 13]);
member.addNewMember(["Todor", 45]);
member.addNewMember(["Georgi", 37]);
member.addNewMember(["Viktor", 30]);
console.log(member.oldestMember());
//# sourceMappingURL=index.js.map