"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayList = /** @class */ (function () {
    function ArrayList(INITIAL_SIZE) {
        this.INITIAL_SIZE = INITIAL_SIZE;
        this._elements = Array(this.INITIAL_SIZE);
        this._size = 0;
        this._capacity = this._elements.length;
    }
    ArrayList.prototype.add = function (element) {
        if (this.isNotEnoughCapacity) {
            this._elements = this.grow();
        }
        this._elements[this._size++] = element;
        return true;
    };
    ArrayList.prototype.addByIndex = function (idx, element) {
        this.isValidIdx(idx);
        if (this.isNotEnoughCapacity) {
            this._elements = this.grow();
        }
        for (var i = this._size - 1; i >= idx; i--) {
            this._elements[i + 1] = this._elements[i];
        }
        this._elements[idx] = element;
        this._size++;
        return true;
    };
    ArrayList.prototype.get = function (idx) {
        this.isValidIdx(idx);
        return this._elements[idx];
    };
    ArrayList.prototype.set = function (idx, element) {
        this.isValidIdx(idx);
        var oldElement = this._elements[idx];
        this._elements[idx] = element;
        return oldElement;
    };
    ArrayList.prototype.remove = function (idx) {
        if (this.isEmpty()) {
            throw Error('List is empty');
        }
        this.isValidIdx(idx);
        var existing = this._elements[idx];
        this._elements = this.shiftLeft(idx);
        if (this._capacity / 3 >= this._size) {
            this._elements = this.shrink();
        }
        return existing;
    };
    ArrayList.prototype.size = function () {
        return this._size;
    };
    ArrayList.prototype.indexOf = function (element) {
        for (var i = 0; i < this._elements.length; i++) {
            if (this._elements[i] === element) {
                return i;
            }
        }
        return -1;
    };
    ArrayList.prototype.contains = function (element) {
        for (var i = 0; i < this._elements.length; i++) {
            if (this._elements[i] === element) {
                return true;
            }
        }
        return false;
    };
    ArrayList.prototype.isEmpty = function () {
        return this._size === 0;
    };
    ArrayList.prototype.isValidIdx = function (idx) {
        if (idx < 0 || idx >= this._elements.length) {
            throw new Error('Index is not valid!');
        }
    };
    ArrayList.prototype.shiftLeft = function (idx) {
        for (var i = idx; i < this._size; i++) {
            this._elements[i] = this._elements[i + 1];
        }
        this._size--;
        var copyElements = this._elements.slice(0, this._size);
        var tmp = Array(this._capacity);
        for (var i = 0; i < this._size; i++) {
            tmp[i] = copyElements[i];
        }
        return tmp;
    };
    ArrayList.prototype.grow = function () {
        var tmp = Array(this._capacity * 2);
        for (var i = 0; i < this._capacity; i++) {
            tmp[i] = this._elements[i];
        }
        this._capacity *= 2;
        return tmp;
    };
    ArrayList.prototype.shrink = function () {
        this._capacity -= this._size;
        var tmp = Array(this._capacity);
        for (var i = 0; i < this._size; i++) {
            tmp[i] = this._elements[i];
        }
        return tmp;
    };
    Object.defineProperty(ArrayList.prototype, "isNotEnoughCapacity", {
        get: function () {
            return this._size === this._capacity;
        },
        enumerable: true,
        configurable: true
    });
    return ArrayList;
}());
exports.ArrayList = ArrayList;
//# sourceMappingURL=ArrayList.js.map