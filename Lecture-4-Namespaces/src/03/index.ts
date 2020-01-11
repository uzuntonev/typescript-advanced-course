/// <reference path="FoodAndBeverages.ts" />

type Entity = { customerName: string; visited: boolean };

class Courier implements FoodAndBeverages.Delivery {
  constructor(protected placesVisit: Entity[]) {}
  newCustomer(customerName: string, visited: boolean = false) {
    if (this.placesVisit.find(x => x.customerName === customerName)) {
      throw new Error(`${customerName} is already a customer of yours!`);
    }
    this.placesVisit.push({ customerName, visited });
    return `${customerName} just became your client.`;
  }
  visitCustomer(customerName: string) {
    const customer = this.placesVisit.find(
      x => x.customerName === customerName
    );

    if (!customer) {
      throw new Error(`${customerName} is not your customer`);
    }
    customer.visited = true;
    return ``;
  }
  showCustomers() {
    return this.placesVisit
      .map(x => `${x.customerName} -> ${x.visited}`)
      .join("\n");
  }
}

let courier = new Courier([{ customerName: "DHL", visited: false }]);

courier.newCustomer("Speedy");
courier.newCustomer("MTM");
courier.newCustomer("TipTop");

courier.visitCustomer("DHL");
courier.visitCustomer("MTM");
courier.visitCustomer("MTM");

console.log(courier.showCustomers());
