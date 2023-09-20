export function sortMap(
  frequencyMap: Record<string, number>,
): [string, number][] {
  return Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
}
