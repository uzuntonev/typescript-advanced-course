"use strict";
var Threeuple = /** @class */ (function () {
    function Threeuple(param1, param2, param3) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }
    Threeuple.prototype.toString = function () {
        return this.param1 + " -> " + this.param2 + " -> " + this.param3;
    };
    return Threeuple;
}());
var n = new Threeuple('Hello World', [1], 312);
console.log(n.toString());
//# sourceMappingURL=index.js.map