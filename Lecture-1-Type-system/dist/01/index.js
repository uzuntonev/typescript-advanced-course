"use strict";
function sort(items, order) {
    return items.sort(function (a, b) {
        if (order === 'asc') {
            return a - b;
        }
        return b - a;
    });
}
var result = sort([14, 7, 17, 6, 8]);
var result1 = sort([14, 7, 17, 6, 8], 'asc');
console.log(result);
console.log(result1);
//# sourceMappingURL=index.js.map