export function generateFibonacciArr(seed: number) {
  const fibArray: number[] = [];
  let a = 0;
  let b = 1;
  for (; a <= seed; [a, b] = [b, a + b]) {
    fibArray.push(a);
  }
  return fibArray;
}
