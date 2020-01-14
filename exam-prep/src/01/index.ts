
class Ticket {
  constructor(
    public destination: string,
    public price: number,
    public status: string
  ) {}
}

interface IMap<T> {
  [key: string]: (x: T) => {};
}

function storeTicket(tickets: string[], criteria: string): Ticket[] {
  const accumulator: Ticket[] = [];
  const sortMap: IMap<Ticket[]> = {
    destination: (result: Ticket[]) => {
      return result.sort((a, b) => a.destination.localeCompare(b.destination));
    },
    status: (result: Ticket[]) => {
      return result.sort((a, b) => a.status.localeCompare(b.status));
    },
    price: (result: Ticket[]) => {
      return result.sort((a, b) => a.price - b.price);
    }
  };

  const result = tickets.reduce((acc, curr) => {
    const [destination, price, status] = curr.split("|");
    acc.push(new Ticket(destination, Number(price), status));
    return acc;
  }, accumulator);

  return (sortMap as any)[criteria](result);
}

console.log(
  storeTicket(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed"
    ],

    "status"
  )
);
