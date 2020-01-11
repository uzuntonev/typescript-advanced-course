interface IRacing {
  createRacer(name: string, fuel: number, position: number): void;
  consumeFuel(usedFuel: number, name: string): void;
  overtake(gained: string, lost: string): any;
}

interface IRacer {
  name: string;
  fuel: number;
  position: number;
}

class Circuit implements IRacing {
  racers: IRacer[] = [];
  isDNF: boolean | undefined;

  createRacer(name: string, fuel: number, position: number): void {
    this.racers.push({ name, fuel, position });
  }

  consumeFuel(usedFuel: number, name: string): void {
    const racer = this.racers.find(x => x.name === name);
    if (racer) {
      racer.fuel -= usedFuel;
      if (racer.fuel <= 0) {
        race.isDNF = true;
      }
    }
  }

  overtake(gained: string, lost: string): any {
    const g = this.racers.find(x => x.name === gained);
    const l = this.racers.find(x => x.name === lost);
    if (g && l) {
      if (g.position !== 1) {
        g.position--;
      }
      if (l.position !== this.racers.length) {
        l.position++;
      } else {
        return `${l.name} is on the back of the grid!`;
      }
    }
  }

  showPositions() {
    return this.racers
      .filter(x => x.fuel > 0)
      .sort((a, b) => {
        return a.position - b.position;
      })
      .map(
        x =>
          `${x.name} finished on ${x.position} position with ${x.fuel} l remaining`
      )
      .join("\n");
  }
}

let race = new Circuit();
race.createRacer("LH", 100, 1);
race.createRacer("VB", 100, 2);
race.createRacer("DR", 100, 3);

race.consumeFuel(92, "LH");
race.consumeFuel(87, "VB");
race.consumeFuel(89, "DR");

race.overtake("LH", "VB");
race.overtake("DR", "VB");
console.log(race.overtake("LH", "VB"));

console.log(race.showPositions());
