"use strict";
var test0 = [29, 13, 9, 0, 13, 0, 21, 0, 14, 82, 12];
function solve(input) {
    var first = input.slice(0, Math.floor(input.length / 2));
    var second = input.slice(Math.floor(input.length / 2) + 1);
    var firstTime = first.reduce(function (acc, curr) {
        if (curr === 0) {
            return (acc *= 0.8);
        }
        return acc + curr;
    }, 0);
    var secondTime = second.reduce(function (acc, curr) {
        if (curr === 0) {
            return (acc *= 0.8);
        }
        return acc + curr;
    }, 0);
    return firstTime < secondTime
        ? "The winner is left with total time: " + firstTime.toFixed(2)
        : "The winner is right with total time: " + secondTime.toFixed(2);
}
console.log(solve(test0));
//# sourceMappingURL=index.js.map