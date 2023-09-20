export function sortMap(
  frequencyMap: Record<string, number>,
): [string, number][] {
  return Object.entries(frequencyMap).sort((a, b) => a[1] - b[1]);
}
