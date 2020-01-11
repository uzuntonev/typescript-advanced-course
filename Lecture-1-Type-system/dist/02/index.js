"use strict";
var test0 = [
    "1, 2, 3, 4, 5, 5, 5, 6",
    "Delete 5",
    "Insert 10 1",
    "Delete 5",
    "end"
];
var test1 = [
    "20, 12, 4, 319, 21, 31234, 2, 41, 23, 4",
    "Insert 50 2",
    "Insert 50 5",
    "Delete 4",
    "end"
];
function changeArray(input) {
    var numbers = input[0].split(", ").map(Number);
    input.forEach(function (e) {
        var _a = e.split(" "), command = _a[0], value = _a[1], index = _a[2];
        if (command === "Delete") {
            numbers = numbers.filter(function (x) { return x !== Number(value); });
        }
        if (command === "Insert") {
            numbers.splice(Number(index), 0, Number(value));
        }
        if (command === "end") {
            console.log(numbers);
        }
    });
}
changeArray(test1);
//# sourceMappingURL=index.js.map