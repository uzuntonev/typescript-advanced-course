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
var CreateAccount = /** @class */ (function () {
    function CreateAccount(bankName, bankID) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
    return CreateAccount;
}());
var PersonalAccount = /** @class */ (function (_super) {
    __extends(PersonalAccount, _super);
    function PersonalAccount(bankName, bankID, ownerName) {
        var _this = _super.call(this, bankName, bankID) || this;
        _this.bankName = bankName;
        _this.bankID = bankID;
        _this.ownerName = ownerName;
        _this.money = 0;
        _this.recentTransactions = {};
        return _this;
    }
    PersonalAccount.prototype.deposit = function (amount) {
        this.money += amount;
    };
    PersonalAccount.prototype.expense = function (amount, expenseType) {
        if (this.money - amount < 0) {
            throw new Error("You cant make " + expenseType + " transaction");
        }
        this.recentTransactions[expenseType] =
            (this.recentTransactions[expenseType] || 0) + amount;
        this.money -= amount;
    };
    PersonalAccount.prototype.showDetails = function () {
        var totalSpend = Object.values(this.recentTransactions).reduce(function (acc, curr) { return acc + curr; }, 0);
        return "Bank name: " + this.bankName + "\nBank ID: " + this.bankID + "\nOwner name: " + this.ownerName + "\nMoney: " + this.money + "\nMoney spent: " + totalSpend + "\n";
    };
    return PersonalAccount;
}(CreateAccount));
// let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");
// account.deposit(1000);
// account.deposit(1000);
// account.expense(700, "Buy new phone");
// account.expense(400, "Book a vacation");
// account.expense(400, "Book a vacation");
// account.expense(100, "Buy food");
// console.log(account.showDetails());
var account2 = new PersonalAccount("Fibank", 100000, "Petar Petrol");
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, "Buy a new car");
account2.expense(200, "Go to a fancy restaurant");
account2.expense(100, "Go to a bar");
account2.expense(30, "Go to the movies");
console.log(account2.showDetails());
//# sourceMappingURL=index.js.map