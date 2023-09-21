import { sortMap } from "./sorting";

describe("sortMap", () => {
  it("should return a sorted array of tuples in descending order based on frequency", () => {
    const inputMap = {
      apple: 5n,
      banana: 2n,
      orange: 3n,
    };

    const expectedOutput = [
      ["apple", 5n],
      ["orange", 3n],
      ["banana", 2n],
    ];

    expect(sortMap(inputMap)).toEqual(expectedOutput);
  });

  it("should handle empty map and return an empty array", () => {
    const inputMap = {};

    const expectedOutput: [string, bigint][] = [];

    expect(sortMap(inputMap)).toEqual(expectedOutput);
  });

  it("should sort the map properly when multiple keys have the same frequency", () => {
    const inputMap = {
      apple: 3n,
      banana: 5n,
      orange: 3n,
      mango: 5n,
      peach: 5n,
    };

    const expectedOutput = [
      ["banana", 5n],
      ["mango", 5n],
      ["peach", 5n],
      ["apple", 3n],
      ["orange", 3n],
    ];

    expect(sortMap(inputMap)).toEqual(expectedOutput);
  });
});
