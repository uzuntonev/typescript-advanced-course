namespace Greeter {
  export interface Greeting {
    introduction(): string;
    sayGoodbye(name: string): string;
  }
}
