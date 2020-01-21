export interface IRacer {
  firstName: string;
  lastName: string;
  id: number;
  dateOfBirth: string;
  racingTeam?: string;
  hasContract?: boolean;
  salary?: number;
  terms?: number;
  wonRaces?: number;
}

export interface RaceInterface {
  overtake(firstID: number, secondID: number): string;
  winRace(): string;
  showStandings(): string;
}

export type QualiData = {
  id: number;
  lapTime?: number;
  position?: number;
};
