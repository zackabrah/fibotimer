export const sortNumberFrequencies = (
  numbers: number[],
): [string, number][] => {
  numbers.reduce(
    (acc, number) => {
      if (acc[number]) {
        acc[number] += 1;
      } else {
        acc[number] = 1;
      }
      return acc;
    },
    {} as Record<number, number>,
  );

  const numberFrequenciesSorted = Object.entries(numbers).sort(
    (a, b) => b[1] - a[1],
  );

  return numberFrequenciesSorted;
};
