const test0 = [
  "1 23 29 18 43 21 20",
  "Add 5",
  "Remove 5",
  "Shift left 3",
  "Shift left 1",
  "End"
];

const test1 = [
  "5 12 42 95 32 1",
  "Insert 3 0",
  "Remove 10",
  "Insert 8 6",
  "Shift right 1",
  "Shift left 2",
  "End"
];

function operations(input: string[]) {
  const numbers = input[0].split(" ");
  input.forEach(e => {
    const [command, ...rest] = e.split(" ");
    if (command === "Add") {
      numbers.push(rest[0]);
    } else if (command === "Insert") {
      const index = Number(rest[1]);
      const element = rest[0];
      if (index || index === 0) {
        numbers.splice(index, 0, element);
      } else {
        console.log("Invalid index");
      }
    } else if (command === "Remove") {
      const index = Number(rest[0]);
      if (index || index === 0) {
        numbers.splice(index, 1);
      } else {
        console.log("Invalid index");
      }
    } else if (command === "Shift") {
      if (rest[0] === "left") {
        for (let i = 0; i < Number(rest[1]); i++) {
            const element: string = numbers.shift() || ''
          numbers.push(element);
        }
      } else {
        const element: string = numbers.pop() || ''

        numbers.unshift(element);
      }
    } else if (command === "End") {
      console.log(numbers);
    }
  });
}

operations(test1);
