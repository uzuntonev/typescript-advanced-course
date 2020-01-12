export interface IContext {
  app: Sammy.Application;
  params: {
    userId?: string;
    username?: string;
    password?: string;
    count?: number;
    treks?: ITrek[];
    [key: string]: any;
  };
  [key: string]: any;
}

export interface ITrek {
  _id: string;
  location: string;
  dateTime: string;
  imageURL: string;
  organizer: string;
  likes: number;
}
