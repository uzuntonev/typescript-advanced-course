"use strict";
var Tuple = /** @class */ (function () {
    function Tuple(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    Tuple.prototype.toString = function () {
        return this.param1 + " -> " + this.param2;
    };
    return Tuple;
}());
var n1 = new Tuple("Apples", 10);
console.log(n1.toString());
//# sourceMappingURL=index.js.map