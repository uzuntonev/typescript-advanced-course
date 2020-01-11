abstract class Activities {
  abstract parkVehicle(plate: string): void;
  abstract payForStay(hours: number, rate: number, plate: string): void;
  abstract leaveTheParking(plate: string): void;
}

class ParkingLot extends Activities {
  public revenue: number = 0;
  public parkedVehicles: { plate: string; didPay: boolean }[] = [];
  constructor(public capacity: number) {
    super();
  }

  parkVehicle(plate: string) {
    if (this.capacity <= this.parkedVehicles.length) {
      throw new Error("No more available spaces in the parking lot!");
    }
    this.parkedVehicles.push({ plate, didPay: false });
  }

  payForStay(hours: number, rate: number, plate: string) {
    const vehicle = this.parkedVehicles.find(x => x.plate === plate);
    if (!vehicle) {
      throw new Error("There is no such vehicle parked in the parking lot!");
    }
    this.revenue += rate * hours;
    vehicle.didPay = true;
  }

  leaveTheParking(plate: string) {
    const vehicle = this.parkedVehicles.find(x => x.plate === plate);
    if(vehicle && vehicle.didPay){
      this.parkedVehicles = this.parkedVehicles.filter(x => x !== vehicle);
    }
  }

  overview() {
    return `The current revenue of the parking lot is ${this.revenue} and ${this.parkedVehicles.map(x => x.plate).join(', ')} are parked`
  }
}

let p = new ParkingLot(5);
p.parkVehicle("CA1111CA");
p.parkVehicle("CA2222CA");
p.parkVehicle("CA3333CA");
p.parkVehicle("CA4444CA");
p.parkVehicle("CA5555CA");

p.payForStay(4, 2, "CA1111CA");
p.payForStay(2, 2, "CA2222CA");
p.payForStay(7, 2, "CA4444CA");

p.leaveTheParking("CA1111CA");
p.leaveTheParking("CA4444CA");

console.log(p.overview());
