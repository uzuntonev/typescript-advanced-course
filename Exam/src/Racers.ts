import { IRacer } from "./interfaces";

export class Racers {
  allRacers: IRacer[] = [];

  constructor() {}

  createRacer(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    id: number
  ) {
    if (this.allRacers.find(r => r.firstName === firstName)) {
      throw new Error(`${firstName} ${lastName} already exists on the grid`);
    }
    if (this.allRacers.length === 20) {
      throw new Error(
        "You have exceeded the maximum number of racers on the grid"
      );
    }
    this.allRacers.push({
      firstName,
      lastName,
      dateOfBirth,
      id
    });
  }

  signContract(id: number, racingTeam: string, salary: number, terms: number) {
    const currentRacer = this.allRacers.find(r => r.id === id);
    if (!currentRacer) {
      throw new Error("There is not such racer on the grid");
    }
    currentRacer.hasContract = true;
    currentRacer.racingTeam = racingTeam;
    currentRacer.salary = salary;
    currentRacer.terms = terms;
    return `${currentRacer.firstName} ${currentRacer.lastName} has just signed a contract with ${racingTeam} for ${terms} years`;
  }

  renewContract(id: number, salary: number, terms: number) {
    const currentRacer = this.allRacers.find(r => r.id === id);
    if (!currentRacer || !currentRacer.hasContract) {
      throw new Error("There is no racer who meets the criteria");
    }
    currentRacer.salary = salary;
    currentRacer.terms = terms;
    return `${currentRacer.firstName} ${currentRacer.lastName} has renewed his contract with ${currentRacer.racingTeam} for ${terms} years`;
  }

  signWithNewTeam(
    id: number,
    racingTeam: string,
    salary: number,
    terms: number
  ) {
    const currentRacer = this.allRacers.find(r => r.id === id);
    if (!currentRacer || currentRacer.racingTeam === racingTeam) {
      throw new Error(
        "There is no racer who meets the criteria or he is currently in the same team"
      );
    }

    currentRacer.racingTeam = racingTeam;
    currentRacer.salary = salary;
    currentRacer.terms = terms;
    return `${currentRacer.firstName} ${currentRacer.lastName} has renewed his contract with his new team -${racingTeam} for ${terms} years.`;
  }
}

let racers = new Racers();

racers.createRacer("Lewis", "Hamilton", "11.12.1988", 44);
racers.signContract(44, "Mercedes", 10000000, 4);

racers.createRacer("Sebastian", "Vettel", "11.11.1986", 5);
racers.signContract(5, "Ferrari", 4899990, 2);

racers.createRacer("Valteri", "Bottas", "11.11.1986", 22);
racers.signContract(22, "Mercedes", 900000, 2);

racers.createRacer("Max", "Verstappen", "11.11.1986", 33);


// console.log(racers.signContract(33, "Redbull", 900100, 3));
// console.log(racers.renewContract(33, 98765, 4));
// console.log(racers.signWithNewTeam(5, "Redbull", 1234567, 2));

