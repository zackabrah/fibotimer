// sorts a map of bigints by value in descending order
export function sortMap(
  frequencyMap: Record<string, bigint>,
): [string, bigint][] {
  return Object.entries(frequencyMap).sort(
    (a, b) => Number(b[1]) - Number(a[1]),
  );
}
