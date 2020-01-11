const test0 = ["Yoghurt", 48, "Rise", 138, "Apple", 52];

interface IProduct {
  [key: string]: number;
}

// function solve(input: string[]): object | null {
//   if (input.length === 0) {
//     return null;
//   }
//   const arr: IProduct[] = [];
//   for (let i = 0; i < input.length; i += 2) {
//     const obj: IProduct = { [input[i]]: input[i + 1] };
//     arr.push(obj);
//   }
//   const result: object = Object.assign({}, ...arr);
//   return result;
// }

function solve(input: (string | number)[]){
  const accumulator: {[key: string]: number | string} = {}
  
  return input.reduce((acc, curr, index, array) => {
    if (index % 2 !== 0) {
      acc[array[index - 1]] = curr;
      return acc;
    }
    return acc;
  }, accumulator);
}
const a = solve(test0);
console.log(solve(test0));
