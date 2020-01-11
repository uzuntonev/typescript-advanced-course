"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Shop_1 = __importDefault(require("./Shop"));
var PCStore = /** @class */ (function (_super) {
    __extends(PCStore, _super);
    function PCStore(shopName, shopAddress, budget) {
        var _this = _super.call(this, shopName, shopAddress) || this;
        _this.budget = budget;
        _this.pcParts = {};
        _this.pcCollection = [];
        return _this;
    }
    PCStore.prototype.buyParts = function (part, price) {
        if (this.budget - price < 0) {
            throw new Error(this.shopName + " cannot afford that part.");
        }
        this.pcParts[part] = (this.pcParts[part] || 0) + 1;
        this.budget -= price;
    };
    PCStore.prototype.buildPC = function (neededParts, pcName, pcPrice) {
        var _this = this;
        neededParts.forEach(function (x) {
            _this.pcParts[x]--;
            if (!_this.pcParts.hasOwnProperty(x)) {
                throw new Error("You do not have all needed parts to build this PC");
            }
            if (_this.pcParts[x] === 0) {
                delete _this.pcParts[x];
            }
        });
        this.pcCollection.push({ pcName: pcName, neededParts: neededParts, pcPrice: pcPrice });
        return "You have just built " + pcName;
    };
    PCStore.prototype.sellPC = function (desiredPCName, clientBudget) {
        var pc = this.pcCollection.find(function (x) { return x.pcName === desiredPCName; });
        if (pc && clientBudget > pc.pcPrice) {
            this.pcCollection = this.pcCollection.filter(function (x) { return x !== pc; });
            this.budget += pc.pcPrice;
            return "You successfully bought " + desiredPCName + " and you get " + (clientBudget -
                pc.pcPrice) + " BGN in return ";
        }
    };
    PCStore.prototype.showInventory = function () {
        return "Shop name: " + this.shopName + "\nShop address: " + this.shopAddress + "\nShop budget: " + this.budget + "\nPC parts in store: " + Object.keys(this.pcParts).join(", ") + "\nPCs in store: " + this.pcCollection.map(function (x) { return x.pcName; }).join(", ") + "\n";
    };
    return PCStore;
}(Shop_1.default));
var pcStore = new PCStore("AllBestPCs", "Sofia", 10000);
pcStore.buyParts("CPU", 300);
pcStore.buyParts("CPU", 300);
pcStore.buyParts("CPU", 300);
pcStore.buyParts("CPU", 300);
pcStore.buyParts("Graphic card", 200);
pcStore.buyParts("Graphic card", 200);
pcStore.buyParts("Graphic card", 200);
pcStore.buyParts("RAM", 70);
pcStore.buyParts("RAM", 70);
pcStore.buyParts("HDD", 30);
pcStore.buyParts("HDD", 30);
pcStore.buyParts("HDD", 30);
pcStore.buyParts("HDD", 30);
pcStore.buyParts("HDD", 30);
pcStore.buyParts("SSD", 60);
pcStore.buyParts("SSD", 60);
pcStore.buyParts("SSD", 60);
pcStore.buildPC(["HDD", "CPU", "Graphic card", "RAM"], "Regular PC", 1000);
pcStore.buildPC(["HDD", "SSD", "CPU", "Graphic card", "RAM"], "Gaming PC", 1700);
console.log(pcStore.sellPC("Regular PC", 1300));
console.log(pcStore.showInventory());
//# sourceMappingURL=index.js.map