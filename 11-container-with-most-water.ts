function maxArea(height: number[]): number {
  let leftIndex = 0;
  let rightIndex = height.length;
  let maxAmountOfWater = 0;

  while (leftIndex < rightIndex) {
    const leftLineHeight = height[leftIndex];
    const rightLineHeight = height[rightIndex];
    const isLeftLineShorterThanRightLine =
      height[leftIndex] - height[rightIndex] < 0;
    const minLineHeight = isLeftLineShorterThanRightLine
      ? leftLineHeight
      : rightLineHeight;
    const currentAmountOfWater = (rightIndex - leftIndex) * minLineHeight;
    if (maxAmountOfWater <= currentAmountOfWater) {
      maxAmountOfWater = currentAmountOfWater;
    }
    if (isLeftLineShorterThanRightLine) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return maxAmountOfWater;
}
