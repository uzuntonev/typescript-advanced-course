"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var List = /** @class */ (function () {
    function List() {
        this._size = 0;
        this._head = null;
        this._last = null;
    }
    List.prototype.addFirst = function (element) {
        var toAddfirst = new Node_1.Node(element);
        if (this.isEmpty()) {
            this._last = toAddfirst;
        }
        toAddfirst.next = this._head;
        this._head = toAddfirst;
        this._size++;
    };
    List.prototype.addLast = function (element) {
        var toAddLast = new Node_1.Node(element);
        if (this.isEmpty()) {
            this._head = toAddLast;
        }
        this._last.next = toAddLast;
        this._last = toAddLast;
        this._size++;
    };
    List.prototype.removeFirst = function () {
        if (this.isEmpty()) {
            throw new Error('List is empty !');
        }
        var toRemove = this._head;
        if (this._size === 1) {
            this._head = null;
        }
        else {
            this._head = toRemove.next;
        }
        this._size--;
        return toRemove.value;
    };
    List.prototype.removeLast = function () {
        var toRemove = this._last;
        var first = this._head;
        var preLast = first;
        while (first.next) {
            preLast = first;
            first = first.next;
        }
        preLast.next = null;
        this._last = preLast;
        this._size--;
        return toRemove.value;
    };
    List.prototype.getFirst = function () {
        if (this.isEmpty()) {
            throw new Error('List is empty !');
        }
        return this._head.value;
    };
    List.prototype.getLast = function () {
        if (this.isEmpty()) {
            throw new Error('List is empty !');
        }
        return this._last.value;
    };
    List.prototype.size = function () {
        return this._size;
    };
    List.prototype.isEmpty = function () {
        return this._size === 0;
    };
    List.prototype[Symbol.iterator] = function () {
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
    return List;
}());
exports.List = List;
//# sourceMappingURL=List.js.map