"use strict";
var Circuit = /** @class */ (function () {
    function Circuit() {
        this.racers = [];
    }
    Circuit.prototype.createRacer = function (name, fuel, position) {
        this.racers.push({ name: name, fuel: fuel, position: position });
    };
    Circuit.prototype.consumeFuel = function (usedFuel, name) {
        var racer = this.racers.find(function (x) { return x.name === name; });
        if (racer) {
            racer.fuel -= usedFuel;
            if (racer.fuel <= 0) {
                race.isDNF = true;
            }
        }
    };
    Circuit.prototype.overtake = function (gained, lost) {
        var g = this.racers.find(function (x) { return x.name === gained; });
        var l = this.racers.find(function (x) { return x.name === lost; });
        if (g && l) {
            if (g.position !== 1) {
                g.position--;
            }
            if (l.position !== this.racers.length) {
                l.position++;
            }
            else {
                return l.name + " is on the back of the grid!";
            }
        }
    };
    Circuit.prototype.showPositions = function () {
        return this.racers
            .filter(function (x) { return x.fuel > 0; })
            .sort(function (a, b) {
            return a.position - b.position;
        })
            .map(function (x) {
            return x.name + " finished on " + x.position + " position with " + x.fuel + " l remaining";
        })
            .join("\n");
    };
    return Circuit;
}());
var race = new Circuit();
race.createRacer("LH", 100, 1);
race.createRacer("VB", 100, 2);
race.createRacer("DR", 100, 3);
race.consumeFuel(92, "LH");
race.consumeFuel(87, "VB");
race.consumeFuel(89, "DR");
race.overtake("LH", "VB");
race.overtake("DR", "VB");
console.log(race.overtake("LH", "VB"));
console.log(race.showPositions());
//# sourceMappingURL=index.js.map