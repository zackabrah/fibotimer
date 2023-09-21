// generates an array of fibonacci numbers up to n
export function generateFibonacciArr(n: number) {
  const fibArray: number[] = [];
  let a = 0;
  let b = 1;
  for (; a <= n; [a, b] = [b, a + b]) {
    fibArray.push(a);
  }
  return fibArray;
}

// generates an array of the first 1000 numbers in the fibonacci sequence
export function generateFibonacciSequence(length: number): bigint[] {
  if (length <= 0) {
    return [];
  }

  if (length === 1) {
    return [0n];
  }

  const fibonacciSequence: bigint[] = [0n, 1n]; // Initialize with the first two Fibonacci numbers

  while (fibonacciSequence.length < length) {
    const nextFibonacciNumber =
      fibonacciSequence[fibonacciSequence.length - 1]! +
      fibonacciSequence[fibonacciSequence.length - 2]!;
    fibonacciSequence.push(nextFibonacciNumber);
  }

  return fibonacciSequence;
}
