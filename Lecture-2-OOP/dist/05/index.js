"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Activities = /** @class */ (function () {
    function Activities() {
    }
    return Activities;
}());
var ParkingLot = /** @class */ (function (_super) {
    __extends(ParkingLot, _super);
    function ParkingLot(capacity) {
        var _this = _super.call(this) || this;
        _this.capacity = capacity;
        _this.revenue = 0;
        _this.parkedVehicles = [];
        return _this;
    }
    ParkingLot.prototype.parkVehicle = function (plate) {
        if (this.capacity <= this.parkedVehicles.length) {
            throw new Error("No more available spaces in the parking lot!");
        }
        this.parkedVehicles.push({ plate: plate, didPay: false });
    };
    ParkingLot.prototype.payForStay = function (hours, rate, plate) {
        var vehicle = this.parkedVehicles.find(function (x) { return x.plate === plate; });
        if (!vehicle) {
            throw new Error("There is no such vehicle parked in the parking lot!");
        }
        this.revenue += rate * hours;
        vehicle.didPay = true;
    };
    ParkingLot.prototype.leaveTheParking = function (plate) {
        var vehicle = this.parkedVehicles.find(function (x) { return x.plate === plate; });
        if (vehicle && vehicle.didPay) {
            this.parkedVehicles = this.parkedVehicles.filter(function (x) { return x !== vehicle; });
        }
    };
    ParkingLot.prototype.overview = function () {
        return "The current revenue of the parking lot is " + this.revenue + " and " + this.parkedVehicles.map(function (x) { return x.plate; }).join(', ') + " are parked";
    };
    return ParkingLot;
}(Activities));
var p = new ParkingLot(5);
p.parkVehicle("CA1111CA");
p.parkVehicle("CA2222CA");
p.parkVehicle("CA3333CA");
p.parkVehicle("CA4444CA");
p.parkVehicle("CA5555CA");
p.payForStay(4, 2, "CA1111CA");
p.payForStay(2, 2, "CA2222CA");
p.payForStay(7, 2, "CA4444CA");
p.leaveTheParking("CA1111CA");
p.leaveTheParking("CA4444CA");
console.log(p.overview());
//# sourceMappingURL=index.js.map