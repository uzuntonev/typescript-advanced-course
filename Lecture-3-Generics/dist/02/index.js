"use strict";
var CompareElements = /** @class */ (function () {
    function CompareElements(items) {
        this.items = items;
    }
    CompareElements.prototype.compare = function (element) {
        return this.items.filter(function (x) { return x === element; }).length;
    };
    return CompareElements;
}());
// let c = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);
// console.log(c.compare("b"));
var c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));
//# sourceMappingURL=index.js.map