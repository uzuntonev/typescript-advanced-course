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
var Quali_1 = require("./Quali");
var Race = /** @class */ (function (_super) {
    __extends(Race, _super);
    function Race(raceName) {
        var _this = _super.call(this) || this;
        _this.raceName = raceName;
        return _this;
    }
    Race.prototype.overtake = function (overtakerID, overtakenID) {
        var _a, _b;
        var front = this.finalPositions.find(function (x) { return x.id === overtakerID; });
        var back = this.finalPositions.find(function (x) { return x.id === overtakenID; });
        if (!((_a = front) === null || _a === void 0 ? void 0 : _a.position) || !((_b = back) === null || _b === void 0 ? void 0 : _b.position)) {
            throw new Error("There are no such racers in the race");
        }
        if (front.position < back.position) {
            throw new Error("This overtake is not possible");
        }
        if ((front.position - back.position) !== 1) {
            throw new Error("This overtake is not possible");
        }
        if (back.position === 1) {
            throw new Error("This overtake is not possible");
        }
        if (back.position === this.finalPositions.length) {
            throw new Error("This overtake is not possible");
        }
        var currentPosition = back.position;
        front.position = currentPosition;
        back.position++;
        this.finalPositions.sort(function (a, b) {
            if (a.position && b.position) {
                return a.position - b.position;
            }
            return 0;
        });
        return overtakerID + " successfully overtook " + overtakenID;
    };
    Race.prototype.winRace = function () {
        var _this = this;
        var _a;
        var racer = this.allRacers.find(function (r) { return r.id === _this.finalPositions[0].id; });
        if (racer) {
            if (((_a = racer) === null || _a === void 0 ? void 0 : _a.hasContract) && racer.terms != undefined && racer.wonRaces >= 1) {
                racer.wonRaces++;
            }
            racer.wonRaces = 1;
            return "The winner of the " + this.raceName + " race is " + racer.firstName + " " + racer.lastName;
        }
        return "";
    };
    Race.prototype.showStandings = function () {
        var _this = this;
        var allRacers = this.finalPositions.map(function (x) {
            var _a, _b;
            var currentRacer = _this.allRacers.find(function (r) { return r.id === x.id; });
            return x.position + ". " + ((_a = currentRacer) === null || _a === void 0 ? void 0 : _a.firstName) + " " + ((_b = currentRacer) === null || _b === void 0 ? void 0 : _b.lastName);
        });
        var topThree = allRacers.slice(0, 3);
        var rest = allRacers.slice(3);
        return "Here is your top three:\n" + topThree.join("\n") + "\nAnd the rest of the grid is as follows:\n" + rest.join("\n") + "\n";
    };
    return Race;
}(Quali_1.Quali));
var race = new Race("Sepang");
race.createRacer("Lewis", "Hamilton", "11.12.1988", 44);
race.signContract(44, "Mercedes", 10000000, 4);
race.createRacer("Sebastian", "Vettel", "11.11.1986", 5);
race.signContract(5, "Ferrari", 4899990, 2);
race.createRacer("Valteri", "Bottas", "11.11.1986", 22);
race.signContract(22, "Mercedes", 900000, 2);
race.createRacer("Max", "Verstappen", "11.11.1986", 33);
race.fastestLap(22, 1.24);
race.fastestLap(44, 1.22);
race.fastestLap(5, 1.25);
race.fastestLap(33, 1.23);
race.standings();
race.overtake(22, 33);
race.overtake(5, 33);
race.overtake(5, 22);
race.overtake(22, 5);
race.overtake(5, 22);
race.winRace();
console.log(race.showStandings());
//# sourceMappingURL=Race.js.map