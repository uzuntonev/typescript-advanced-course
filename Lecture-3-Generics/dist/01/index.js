"use strict";
var Box = /** @class */ (function () {
    function Box(prop) {
        this.prop = prop;
    }
    Box.prototype.toString = function () {
        return this.prop + " is of type " + typeof this.prop;
    };
    return Box;
}());
var box1 = new Box(["test"]);
var box2 = new Box(20);
var box3 = new Box("Hello");
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
//# sourceMappingURL=index.js.map