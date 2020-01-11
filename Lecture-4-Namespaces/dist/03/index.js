"use strict";
/// <reference path="FoodAndBeverages.ts" />
var Courier = /** @class */ (function () {
    function Courier(placesVisit) {
        this.placesVisit = placesVisit;
    }
    Courier.prototype.newCustomer = function (customerName, visited) {
        if (visited === void 0) { visited = false; }
        if (this.placesVisit.find(function (x) { return x.customerName === customerName; })) {
            throw new Error(customerName + " is already a customer of yours!");
        }
        this.placesVisit.push({ customerName: customerName, visited: visited });
        return customerName + " just became your client.";
    };
    Courier.prototype.visitCustomer = function (customerName) {
        var customer = this.placesVisit.find(function (x) { return x.customerName === customerName; });
        if (!customer) {
            throw new Error(customerName + " is not your customer");
        }
        customer.visited = true;
        return "";
    };
    Courier.prototype.showCustomers = function () {
        return this.placesVisit
            .map(function (x) { return x.customerName + " -> " + x.visited; })
            .join("\n");
    };
    return Courier;
}());
var courier = new Courier([{ customerName: "DHL", visited: false }]);
courier.newCustomer("Speedy");
courier.newCustomer("MTM");
courier.newCustomer("TipTop");
courier.visitCustomer("DHL");
courier.visitCustomer("MTM");
courier.visitCustomer("MTM");
console.log(courier.showCustomers());
//# sourceMappingURL=index.js.map