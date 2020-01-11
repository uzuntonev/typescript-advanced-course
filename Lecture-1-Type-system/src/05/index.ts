const test0 = [29, 13, 9, 0, 13, 0, 21, 0, 14, 82, 12];

function solve(input: number[]): string {
  const first: number[] = input.slice(0, Math.floor(input.length / 2));
  const second: number[] = input.slice(Math.floor(input.length / 2) + 1);


  const firstTime: number = first.reduce((acc, curr) => {
    if (curr === 0) {
      return (acc *= 0.8);
    }
    return acc + curr;
  }, 0);

  const secondTime: number = second.reduce((acc, curr) => {
    if (curr === 0) {
      return (acc *= 0.8);
    }
    return acc + curr;
  }, 0);

  return firstTime < secondTime 
  ? `The winner is left with total time: ${firstTime.toFixed(2)}`
  : `The winner is right with total time: ${secondTime.toFixed(2)}`
}

console.log(solve(test0))

