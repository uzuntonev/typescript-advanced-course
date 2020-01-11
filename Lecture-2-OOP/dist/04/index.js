"use strict";
var Car = /** @class */ (function () {
    function Car(model, weight, color) {
        this.model = model;
        this.weight = weight;
        this.color = color;
    }
    return Car;
}());
var Engine = /** @class */ (function () {
    function Engine(model, power, displacement, efficiency) {
        this.model = model;
        this.power = power;
        this.displacement = displacement;
        this.efficiency = efficiency;
    }
    return Engine;
}());
var Details = /** @class */ (function () {
    function Details(car, engine) {
        this.car = car;
        this.engine = engine;
    }
    Details.prototype.print = function () {
        return "Vehicle Model: " + this.car.model + "\nEngine model: " + this.engine.model + "\n        Power: " + this.engine.power + "\n        " + (this.engine.displacement
            ? "Displacement: " + this.engine.displacement
            : "") + "\n        " + (this.engine.efficiency ? "Efficiency: " + this.engine.efficiency : "") + "\n" + (this.car.weight ? "Weight: " + this.car.weight : "") + "\n" + (this.car.color ? "Color: " + this.car.color : "") + "\n";
    };
    return Details;
}());
var s = new Details(new Car("C class", 3982, "red"), new Engine("MB177", 510, 3982, "A"));
// let s = new Details(new Car("C class"), new Engine("MB177", 510));
console.log(s.print().trim());
//# sourceMappingURL=index.js.map