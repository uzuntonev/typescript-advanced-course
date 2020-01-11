class Car {
  constructor(
    public model: string,
    public weight?: number,
    public color?: string
  ) {}
}

class Engine {
  constructor(
    public model: string,
    public power: number,
    public displacement?: number,
    public efficiency?: string
  ) {}
}

class Details {
  constructor(public car: Car, public engine: Engine) {}
  print(): string {
    return `Vehicle Model: ${this.car.model}
Engine model: ${this.engine.model}
        Power: ${this.engine.power}
        ${
          this.engine.displacement
            ? `Displacement: ${this.engine.displacement}`
            : ""
        }
        ${this.engine.efficiency ? `Efficiency: ${this.engine.efficiency}` : ""}
${this.car.weight ? `Weight: ${this.car.weight}` : ""}
${this.car.color ? `Color: ${this.car.color}` : ""}
`;
  }
}

let s = new Details(
  new Car("C class", 3982, "red"),
  new Engine("MB177", 510, 3982, "A")
);

// let s = new Details(new Car("C class"), new Engine("MB177", 510));

console.log(s.print().trim());
