import { IForum, IUser, IQuestion } from "./interfaces";
import { Register, Input, InputAnswer } from "./types";
import { AbstractForum } from "./abstractClasses";

class Forum extends AbstractForum implements IForum {
  users: IUser[] = [];
  questions: IQuestion[] = [];
  id = 1;
  register(...args: Register) {
    const [username, pass, repPass, email] = args;
    if (args.find(x => x === "")) {
      return new Error("Input can not be empty");
    }
    if (pass !== repPass) {
      return new Error("Passwords do not match");
    }
    if (this.users.find(u => u.email === email)) {
      return new Error("This user already exists!");
    }
    this.users.push({
      name: username,
      pass,
      email,
      logged: false
    });
    return `${username} with ${email} was registered successfully!`;
  }

  login(...args: Input) {
    const [username, pass] = args;
    const currentUser = this.users.find(u => u.name === username);
    if (currentUser && currentUser.pass === pass) {
      currentUser.logged = true;
      return `Hello! You have logged in successfully`;
    }
    throw new Error("There is no such user or password is wrong");
  }

  logout(...args: Input) {
    const [username, pass] = args;
    const currentUser = this.users.find(u => u.name === username);
    if (currentUser && currentUser.pass === pass && currentUser.logged) {
      currentUser.logged = false;
      return `You have logged out successfully`;
    }

    throw new Error("There is no such user or password is wrong");

    return "";
  }

  postQuestion(...args: Input) {
    const [username, question] = args;
    const currentUser = this.users.find(u => u.name === username);
    if (!currentUser || !currentUser.logged) {
      throw new Error("You should be logged in to post questions");
    }
    if (question === "") {
      throw new Error("Invalid question");
    }
    this.questions.push({
      question,
      answers: [],
      name: username,
      id: this.id++
    });
    return `Your question has been posted successfully`;
  }

  postAnswer(...args: InputAnswer) {
    const [username, id, answer] = args;
    const currentUser = this.users.find(u => u.name === username);
    const currentQuestion = this.questions.find(q => q.id == id);

    if (!currentUser || !currentUser.logged) {
      throw new Error("You should be logged in to post answers");
    }
    if (answer === "") {
      throw new Error("Invalid answer");
    }

    if (!currentQuestion) {
      throw new Error("There is no such question");
    }
    currentQuestion.answers.push({
      name: username,
      answer
    });
    return `Your answer has been posted successfully`;
  }
  showQuestions() {
    return this.questions
      .map(
        q => `Question ${q.id} by ${q.name}: ${q.question}
${q.answers.map(x => `---${x.name}: ${x.answer}`).join("\n")}`
      )
      .join("\n");
  }
}

let forum = new Forum();

forum.register("Michael", "123", "123", "michael@abv.bg");
forum.register("Stoyan", "123ab7", "123ab7", "some@gmail@.com");
forum.login("Michael", "123");
forum.login("Stoyan", "123ab7");

forum.postQuestion("Michael", "Can I rent a snowboard from your shop?");
forum.postAnswer("Stoyan", 1, "Yes, I have rented one last year.");
forum.postQuestion(
  "Stoyan",
  "How long are supposed to be the ski for my daughter?"
);
forum.postAnswer("Michael", 2, "How old is she?");
forum.postAnswer("Michael", 2, "Tell us how tall she is.");

console.log(forum.showQuestions());
