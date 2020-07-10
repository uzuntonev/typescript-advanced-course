"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var Tree = /** @class */ (function () {
    function Tree(value) {
        var e_1, _a;
        var children = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            children[_i - 1] = arguments[_i];
        }
        this.value = value;
        this.parent = null;
        this.children = [];
        this.children = children;
        try {
            for (var _b = __values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                child.parent = this;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Tree.prototype.bfs = function (element) {
        var e_2, _a;
        var queue = new Queue_1.Queue();
        var tree = this;
        queue.offer(tree);
        while (!queue.isEmpty()) {
            var current = queue.poll();
            if (current.value === element) {
                return current;
            }
            try {
                for (var _b = (e_2 = void 0, __values(current.children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    queue.offer(child);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return null;
    };
    Tree.prototype.dfs = function (element) {
        var _a;
        var foundTree = this.findDfs(this, element);
        if (((_a = foundTree) === null || _a === void 0 ? void 0 : _a.value) === element) {
            return foundTree;
        }
        return null;
    };
    Tree.prototype.addChild = function (key, child) {
        var search = this.bfs(key);
        if (!search) {
            throw new Error('Node is not found !');
        }
        child.parent = search;
        search.children.push(child);
    };
    Tree.prototype.removeNode = function (key) {
        var e_3, _a;
        var toRemove = this.dfs(key);
        if (!toRemove) {
            throw new Error('Node is not found !');
        }
        var parent = toRemove.parent;
        if (parent === null) {
            toRemove.children = [];
            toRemove.value = null;
            return;
        }
        try {
            for (var _b = __values(toRemove.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                child.parent = null;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        toRemove.children = [];
        toRemove.parent = null;
        var index = parent.children.indexOf(toRemove);
        parent.children.splice(index, 1);
    };
    Tree.prototype.swapNode = function (firstKey, secondKey) {
        var _a, _b;
        var firstNode = this.bfs(firstKey);
        var secondNode = this.bfs(secondKey);
        if (!firstNode || !secondNode) {
            throw new Error('Node is not found!');
        }
        var firstParent = firstNode.parent;
        var secondParent = secondNode.parent;
        if (!firstParent || !secondParent) {
            throw new Error('Can not swap with root Node');
        }
        var firstIndex = firstParent.children.indexOf(firstNode);
        var secondIndex = secondParent.children.indexOf(secondNode);
        (_a = firstParent) === null || _a === void 0 ? void 0 : _a.children.splice(firstIndex, 1, secondNode);
        secondNode.parent = firstParent;
        (_b = secondParent) === null || _b === void 0 ? void 0 : _b.children.splice(secondIndex, 1, firstNode);
        firstNode.parent = secondParent;
    };
    Tree.prototype.findDfs = function (tree, element) {
        var e_4, _a;
        if (tree.value === element) {
            return tree;
        }
        try {
            for (var _b = __values(tree.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                var found = this.findDfs(child, element);
                if (found) {
                    return found;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return null;
    };
    return Tree;
}());
exports.Tree = Tree;
// function bfs<T>(tree: Tree<T>, element: T): Tree<T> | null {
//   const queue = new Queue<Tree<T>>();
//   queue.offer(tree);
//   while (!queue.isEmpty()) {
//     const current = queue.poll();
//     if (current.value === element) {
//       return current;
//     }
//     for (const child of current.children) {
//       queue.offer(child);
//     }
//   }
//   return null;
// }
// function dfs<T>(tree: Tree<T>, element: T): Tree<T> | null {
//   if (tree.value === element) {
//     return tree;
//   }
//   for (const child of tree.children) {
//     const foundTree = dfs(child, element);
//     if (foundTree) {
//       return foundTree;
//     }
//   }
//   return null;
// }
//# sourceMappingURL=Tree.js.map