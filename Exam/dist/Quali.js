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
Object.defineProperty(exports, "__esModule", { value: true });
var Racers_1 = require("./Racers");
var Quali = /** @class */ (function (_super) {
    __extends(Quali, _super);
    function Quali() {
        var _this = _super.call(this) || this;
        _this.times = [];
        _this.finalPositions = [];
        return _this;
    }
    Quali.prototype.fastestLap = function (id, lapTime) {
        var currentRacer = this.allRacers.find(function (r) { return r.id === id; });
        if (!currentRacer) {
            throw new Error("There is no such racer on the grid or has no contract with a team");
        }
        this.times.push({
            id: id,
            lapTime: lapTime
        });
        this.times.sort(function (a, b) {
            if (a.lapTime && b.lapTime) {
                return a.lapTime - b.lapTime;
            }
            return 0;
        });
    };
    Quali.prototype.standings = function () {
        var _a;
        var fastest = this.times[0];
        this.finalPositions = this.times.map(function (x, i) {
            return {
                id: x.id,
                position: i + 1
            };
        });
        var racer = this.allRacers.find(function (r) { return r.id === fastest.id; });
        if (racer) {
            return "The fastest driver was " + ((_a = racer) === null || _a === void 0 ? void 0 : _a.firstName) + " " + racer.lastName + " with car " + racer.id + "!";
        }
    };
    return Quali;
}(Racers_1.Racers));
exports.Quali = Quali;
var q = new Quali();
q.createRacer("Lewis", "Hamilton", "11.12.1988", 44);
q.signContract(44, "Mercedes", 10000000, 4);
q.createRacer("Sebastian", "Vettel", "11.11.1986", 5);
q.signContract(5, "Ferrari", 4899990, 2);
q.createRacer("Valteri", "Bottas", "11.11.1986", 22);
q.signContract(22, "Mercedes", 900000, 2);
q.createRacer("Max", "Verstappen", "11.11.1986", 33);
q.fastestLap(22, 1.24);
q.fastestLap(44, 1.22);
q.fastestLap(5, 1.25);
q.fastestLap(33, 1.23);
// console.log(q.standings());
//# sourceMappingURL=Quali.js.map