"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Racers = /** @class */ (function () {
    function Racers() {
        this.allRacers = [];
    }
    Racers.prototype.createRacer = function (firstName, lastName, dateOfBirth, id) {
        if (this.allRacers.find(function (r) { return r.firstName === firstName; })) {
            throw new Error(firstName + " " + lastName + " already exists on the grid");
        }
        if (this.allRacers.length === 20) {
            throw new Error("You have exceeded the maximum number of racers on the grid");
        }
        this.allRacers.push({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            id: id
        });
    };
    Racers.prototype.signContract = function (id, racingTeam, salary, terms) {
        var currentRacer = this.allRacers.find(function (r) { return r.id === id; });
        if (!currentRacer) {
            throw new Error("There is not such racer on the grid");
        }
        currentRacer.hasContract = true;
        currentRacer.racingTeam = racingTeam;
        currentRacer.salary = salary;
        currentRacer.terms = terms;
        return currentRacer.firstName + " " + currentRacer.lastName + " has just signed a contract with " + racingTeam + " for " + terms + " years";
    };
    Racers.prototype.renewContract = function (id, salary, terms) {
        var currentRacer = this.allRacers.find(function (r) { return r.id === id; });
        if (!currentRacer) {
            throw new Error("There is no racer who meets the criteria");
        }
        currentRacer.salary = salary;
        currentRacer.terms = terms;
        return currentRacer.firstName + " " + currentRacer.lastName + " has renewed his contract with " + currentRacer.racingTeam + " for " + terms + " years";
    };
    Racers.prototype.signWithNewTeam = function (id, racingTeam, salary, terms) {
        var currentRacer = this.allRacers.find(function (r) { return r.id === id; });
        if (!currentRacer) {
            throw new Error("There is no racer who meets the criteria or he is currently in the same team");
        }
        currentRacer.racingTeam = racingTeam;
        currentRacer.salary = salary;
        currentRacer.terms = terms;
        return currentRacer.firstName + " " + currentRacer.lastName + " has renewed his contract with his new team -" + racingTeam + " for " + terms + " years.";
    };
    return Racers;
}());
exports.Racers = Racers;
var racers = new Racers();
racers.createRacer("Lewis", "Hamilton", "11.12.1988", 44);
racers.signContract(44, "Mercedes", 10000000, 4);
racers.createRacer("Sebastian", "Vettel", "11.11.1986", 5);
racers.signContract(5, "Ferrari", 4899990, 2);
racers.createRacer("Valteri", "Bottas", "11.11.1986", 22);
racers.signContract(22, "Mercedes", 900000, 2);
racers.createRacer("Max", "Verstappen", "11.11.1986", 33);
// console.log(racers.signContract(33, "Redbull", 900100, 3));
// console.log(racers.renewContract(33, 98765, 4));
// console.log(racers.signWithNewTeam(5, "Redbull", 1234567, 2));
//# sourceMappingURL=Racers.js.map