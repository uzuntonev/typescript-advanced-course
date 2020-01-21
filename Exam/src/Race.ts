import { RaceInterface } from "./interfaces";
import { Quali } from "./Quali";
import { Racers } from "./Racers";

class Race extends Quali implements RaceInterface {
  constructor(private raceName: string) {
    super();
  }
  overtake(overtakerID: number, overtakenID: number) {
    const front = this.finalPositions.find(x => x.id === overtakerID);
    const back = this.finalPositions.find(x => x.id === overtakenID);

    if (!front?.position || !back?.position) {
      throw new Error("There are no such racers in the race");
    }

    if (front.position < back.position) {
      throw new Error("This overtake is not possible");
    }
    if ((front.position - back.position) !== 1) {
      throw new Error("This overtake is not possible");
    }
    if (back.position === 1) {
      throw new Error("This overtake is not possible");
    }
    if (back.position === this.finalPositions.length) {
      throw new Error("This overtake is not possible");
    }

    const currentPosition: number = back.position;
    front.position = currentPosition;
    back.position++;

    this.finalPositions.sort((a, b) => {
      if (a.position && b.position) {
        return a.position - b.position;
      }
      return 0;
    });

    return `${overtakerID} successfully overtook ${overtakenID}`;
  }

  winRace() {
    const racer = this.allRacers.find(r => r.id === this.finalPositions[0].id);
    if (racer) {
      if (racer?.hasContract  && (racer as any).wonRaces >= 1) {
        (racer as any).wonRaces++;
      }
      racer.wonRaces = 1;

      return `The winner of the ${this.raceName} race is ${racer.firstName} ${racer.lastName}`;
    }
    return ``;
  }



  showStandings() {
    const allRacers = this.finalPositions.map(x => {
      const currentRacer = this.allRacers.find(r => r.id === x.id);
      return `${x.position}. ${currentRacer?.firstName} ${currentRacer?.lastName}`;
    });

    const topThree = allRacers.slice(0, 3);
    const rest = allRacers.slice(3);
    return `Here is your top three:
${topThree.join("\n")}
And the rest of the grid is as follows:
${rest.join("\n")}
`;
  }
}

let race = new Race("Sepang");

race.createRacer("Lewis", "Hamilton", "11.12.1988", 44);
race.signContract(44, "Mercedes", 10000000, 4);

race.createRacer("Sebastian", "Vettel", "11.11.1986", 5);
race.signContract(5, "Ferrari", 4899990, 2);

race.createRacer("Valteri", "Bottas", "11.11.1986", 22);
race.signContract(22, "Mercedes", 900000, 2);

race.createRacer("Max", "Verstappen", "11.11.1986", 33);

race.fastestLap(22, 1.24);
race.fastestLap(44, 1.22);
race.fastestLap(5, 1.25);
race.fastestLap(33, 1.23);
race.standings();

race.overtake(22, 33);
race.overtake(5, 33);
race.overtake(5, 22);
race.overtake(22, 5);
race.overtake(5, 22);
race.winRace();
console.log(race.showStandings());
