function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const sortedPotions = potions.sort((x, y) => x - y);
  const result: number[] = [];

  for (let i = 0; i < spells.length; i++) {
    const spell = spells[i];

    let position = -1;
    let found = false;
    let left = 0;
    let right = sortedPotions.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (spell * sortedPotions[mid] >= success) {
        found = true;
        right = mid - 1;
        position = mid;
      } else {
        left = mid + 1;
      }
    }
    if (found) {
      result.push(potions.length - position);
    } else {
      result.push(0);
    }
  }

  return result;
}
