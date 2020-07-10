"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var Queue = /** @class */ (function () {
    function Queue() {
        this._size = 0;
        this._head = null;
    }
    Queue.prototype.offer = function (element) {
        var toInsert = new Node_1.Node(element);
        if (this.isEmpty()) {
            this._head = toInsert;
            this._size++;
            return;
        }
        var current = this._head;
        while (current.next) {
            current = current.next;
        }
        current.next = toInsert;
        this._size++;
    };
    Queue.prototype.poll = function () {
        if (this.isEmpty()) {
            throw Error('Queue is empty !');
        }
        var current = this._head;
        if (this._size === 1) {
            this._head = null;
        }
        this._head = current.next;
        this._size--;
        return current.value;
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error('Queue is empty !');
        }
        return this._head.value;
    };
    Queue.prototype.size = function () {
        return this._size;
    };
    Queue.prototype.isEmpty = function () {
        return this._size === 0;
    };
    Queue.prototype[Symbol.iterator] = function () {
        var current = this._head;
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
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map