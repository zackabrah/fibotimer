import { generateFibonacciArr, generateFibonacciSequence } from "./fibonacci";

describe("generateFibonacciArr", () => {
  it("should return an empty array when max is less than 0", () => {
    expect(generateFibonacciArr(-1)).toEqual([]);
  });

  it("should correctly create an array for the max 1000 numbers", () => {
    const fibArray = generateFibonacciArr(1000);

    // get the last digit in the array
    const lastDigit = fibArray[fibArray.length - 1];
    expect(lastDigit).toEqual(987);
  });
});

describe("generateFibonacciSequence", () => {
  it("should return an empty array when length is less than 0", () => {
    expect(generateFibonacciSequence(-1)).toEqual([]);
  });

  it("should return [] when length is 0", () => {
    expect(generateFibonacciSequence(0)).toEqual([]);
  });

  it("should return [0n] when length is 1", () => {
    expect(generateFibonacciSequence(1)).toEqual([0n]);
  });

  it("should correctly create an array for the first 1000 numbers", () => {
    const fibArray: bigint[] = generateFibonacciSequence(1000);

    // get the last digit in the array
    const lastDigit: bigint = fibArray[999];
    expect(lastDigit).toEqual(
      BigInt(
        26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174626n,
      ),
    );
  });
});
