import Shop from "./Shop";

type PC = { pcName: string; neededParts: string[]; pcPrice: number };

class PCStore extends Shop {
  pcParts: { [key: string]: number } = {};
  pcCollection: PC[] = [];
  constructor(shopName: string, shopAddress: string, protected budget: number) {
    super(shopName, shopAddress);
  }

  buyParts(part: string, price: number) {
    if (this.budget - price < 0) {
      throw new Error(`${this.shopName} cannot afford that part.`);
    }
    this.pcParts[part] = (this.pcParts[part] || 0) + 1;
    this.budget -= price;
  }

  buildPC(neededParts: string[], pcName: string, pcPrice: number) {
    neededParts.forEach(x => {
      this.pcParts[x]--;
      if (!this.pcParts.hasOwnProperty(x)) {
        throw new Error(`You do not have all needed parts to build this PC`);
      }
      if (this.pcParts[x] === 0) {
        delete this.pcParts[x];
      }
    });

    this.pcCollection.push({ pcName, neededParts, pcPrice });
    return `You have just built ${pcName}`;
  }

  sellPC(desiredPCName: string, clientBudget: number) {
    const pc = this.pcCollection.find(x => x.pcName === desiredPCName);
    if (pc && clientBudget > pc.pcPrice) {
      this.pcCollection = this.pcCollection.filter(x => x !== pc);
      this.budget += pc.pcPrice;
      return `You successfully bought ${desiredPCName} and you get ${clientBudget -
        pc.pcPrice} BGN in return `;
    }
  }

  showInventory() {
    return `Shop name: ${this.shopName}
Shop address: ${this.shopAddress}
Shop budget: ${this.budget}
PC parts in store: ${Object.keys(this.pcParts).join(", ")}
PCs in store: ${this.pcCollection.map(x => x.pcName).join(", ")}
`;
  }
}

let pcStore = new PCStore("AllBestPCs", "Sofia", 10000);

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
pcStore.buildPC(
  ["HDD", "SSD", "CPU", "Graphic card", "RAM"],
  "Gaming PC",
  1700
);

console.log(pcStore.sellPC("Regular PC", 1300));
console.log(pcStore.showInventory());
