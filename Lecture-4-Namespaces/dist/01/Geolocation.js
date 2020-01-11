"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var opn = require("open");
var Geolocation = /** @class */ (function () {
    function Geolocation(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    Geolocation.prototype.showCoordinates = function () {
        opn("https://www.google.com/maps/search/" + this.latitude + "," + this.longitude);
        console.log("Page was opened!");
    };
    return Geolocation;
}());
exports.default = Geolocation;
//# sourceMappingURL=Geolocation.js.map