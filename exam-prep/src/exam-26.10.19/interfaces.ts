export interface IForum {
  users: object[];
  questions: IQuestion[];
  id: number;
}

export interface IUser {
  name: string;
  pass: string
  email: string;
  logged: boolean;
}

export interface IQuestion {
    question: string;
    answers: {name: string, answer: string}[]
    name: string;
    id: number
}