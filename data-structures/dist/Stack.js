"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var Stack = /** @class */ (function () {
    function Stack() {
        this._size = 0;
        this._top = null;
    }
    Stack.prototype.push = function (element) {
        var toInsert = new Node_1.Node(element);
        toInsert.next = this._top;
        this._top = toInsert;
        this._size++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        var tmp = this._top;
        this._top = tmp.next;
        this._size--;
        return tmp.value;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this._top.value;
    };
    Stack.prototype.size = function () {
        return this._size;
    };
    Stack.prototype.isEmpty = function () {
        return this._size === 0;
    };
    Stack.prototype[Symbol.iterator] = function () {
        var current = this._top;
        return {
            next: function () {
                if (!current) {
                    return { done: true };
                }
                var tmp = current;
                current = current.next;
                return { value: tmp, done: false };
            },
        };
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map