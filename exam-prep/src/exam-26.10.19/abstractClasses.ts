import { Register, Input, InputAnswer } from "./types";
export abstract class AbstractForum {
  abstract register(...args: Register): string | Error;
  abstract login(...args: Input): string | Error;
  abstract logout(...args: Input): string | Error;
  abstract postQuestion(...args: Input): string | Error;
  abstract postAnswer(...args: InputAnswer): string | Error;
  abstract showQuestions(): string;
}
