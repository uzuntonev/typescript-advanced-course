abstract class CreateAccount<T, K> {
  constructor(public bankName: T, public bankID: K) {}
}

class PersonalAccount<T, K> extends CreateAccount<T, K> {
  money: number = 0;
  recentTransactions: { [key: string]: number } = {};
  constructor(
    public bankName: T,
    public bankID: K,
    readonly ownerName: string
  ) {
    super(bankName, bankID);
  }
  deposit(amount: number): void {
    this.money += amount;
  }

  expense(amount: number, expenseType: string): void {
    if (this.money - amount < 0) {
      throw new Error(`You cant make ${expenseType} transaction`);
    }
    this.recentTransactions[expenseType] =
      (this.recentTransactions[expenseType] || 0) + amount;
    this.money -= amount;
  }

  showDetails(): string {
    const totalSpend = Object.values(this.recentTransactions).reduce(
      (acc, curr) => acc + curr,
      0
    );
    return `Bank name: ${this.bankName}
Bank ID: ${this.bankID}
Owner name: ${this.ownerName}
Money: ${this.money}
Money spent: ${totalSpend}
`;
  }
}

// let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");

// account.deposit(1000);
// account.deposit(1000);
// account.expense(700, "Buy new phone");
// account.expense(400, "Book a vacation");
// account.expense(400, "Book a vacation");
// account.expense(100, "Buy food");
// console.log(account.showDetails());

let account2 = new PersonalAccount("Fibank", 100000, "Petar Petrol");

account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, "Buy a new car");
account2.expense(200, "Go to a fancy restaurant");
account2.expense(100, "Go to a bar");
account2.expense(30, "Go to the movies");
console.log(account2.showDetails());
