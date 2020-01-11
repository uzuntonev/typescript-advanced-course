"use strict";
var CarDealership = /** @class */ (function () {
    function CarDealership(dealershipName) {
        this.dealershipName = dealershipName;
        this.modelsSold = {};
        this.soldCars = 0;
    }
    CarDealership.prototype.sellCar = function (dealerID, model) {
        if (typeof dealerID === 'string' || typeof dealerID === 'number') {
            this.modelsSold[dealerID] = model;
            this.soldCars++;
        }
    };
    CarDealership.prototype.showDetails = function () {
        var cars = Object.entries(this.modelsSold)
            .map(function (x) { return x[0] + " sold " + x[1]; })
            .join("\n");
        return this.dealershipName + ":\n" + cars + "\n";
    };
    return CarDealership;
}());
function pluck(key) {
    return function (object) { return object[key]; };
}
var dealership = new CarDealership("SilverStar");
dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());
//# sourceMappingURL=index.js.map