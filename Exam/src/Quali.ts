import { QualiData } from "./interfaces";
import { Racers } from "./Racers";

export class Quali extends Racers {
  times: QualiData[] = [];
  finalPositions: QualiData[] = [];
  constructor() {
    super()
  }

  fastestLap(id: number, lapTime: number) {
    const currentRacer = this.allRacers.find(r => r.id === id);
    if (!currentRacer || !currentRacer.hasContract) {
      throw new Error(
        "There is no such racer on the grid or has no contract with a team"
      );
    }
    this.times.push({
      id,
      lapTime
    });

     this.times.sort((a, b) => {
      if (a.lapTime && b.lapTime) {
        return a.lapTime - b.lapTime;
      }
      return 0;
    });
  }

  standings() {
    const fastest = this.times[0];

   this.finalPositions =  this.times.map((x, i) => {
      return {
        id: x.id,
        position: i + 1
      };
    });

    const racer = this.allRacers.find(r => r.id === fastest.id);
    if (racer) {
      return `The fastest driver was ${racer?.firstName} ${racer.lastName} with car ${racer.id}!`;
    }
  }
}




let q = new Quali();


q.createRacer("Lewis", "Hamilton", "11.12.1988", 44);
q.signContract(44, "Mercedes", 10000000, 4);

q.createRacer("Sebastian", "Vettel", "11.11.1986", 5);
q.signContract(5, "Ferrari", 4899990, 2);

q.createRacer("Valteri", "Bottas", "11.11.1986", 22);
q.signContract(22, "Mercedes", 900000, 2);

q.createRacer("Max", "Verstappen", "11.11.1986", 33);

q.fastestLap(22, 1.24);
q.fastestLap(44, 1.22);
q.fastestLap(5, 1.25);
q.fastestLap(33, 1.23);

// console.log(q.standings());

