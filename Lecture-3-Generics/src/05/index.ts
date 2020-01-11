interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<K> {
  sellCar(dealerID: K, model: K): void;
}

class CarDealership<T, K> implements Dealership<T>, Actions<K> {
  modelsSold: { [key: string]: any } = {};
  soldCars = 0;
  constructor(public dealershipName: T) {}

  sellCar(dealerID: K, model: K) {
    if(typeof dealerID === 'string' || typeof dealerID === 'number'){
      this.modelsSold[dealerID] = model;
      this.soldCars++;
    }
  }

  showDetails(): string {
    const cars = Object.entries(this.modelsSold)
      .map(x => `${x[0]} sold ${x[1]}`)
      .join("\n");
    return `${this.dealershipName}:
${cars}
`;
  }
}

function pluck<Object extends {}, Key extends keyof Object>(
  key: Key
): (o: Object) => Object[Key] {
  return object => object[key];
}

let dealership = new CarDealership("SilverStar");

dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());
