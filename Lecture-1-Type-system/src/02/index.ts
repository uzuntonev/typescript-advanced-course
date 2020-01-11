const test0 = [
  "1, 2, 3, 4, 5, 5, 5, 6",
  "Delete 5",
  "Insert 10 1",
  "Delete 5",
  "end"
];

const test1 = [
  "20, 12, 4, 319, 21, 31234, 2, 41, 23, 4",
  "Insert 50 2",
  "Insert 50 5",
  "Delete 4",
  "end"
];

function changeArray(input: string[]) {
  let numbers: number[] = input[0].split(", ").map(Number);

  input.forEach(e => {
    const [command, value, index] = e.split(" ");
    if (command === "Delete") {
      numbers = numbers.filter(x => x !== Number(value));
    }
    if (command === "Insert") {
      numbers.splice(Number(index), 0, Number(value));
    }
    if (command === "end") {
      console.log(numbers);
    }
  });
}

changeArray(test1);
