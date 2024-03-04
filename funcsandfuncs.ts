export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate)
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

const newMutateFunc: MutationFunction = (v: number) => v * 100;