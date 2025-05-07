function longestSubarray(nums: number[]): number {
  let zeroCount = 0;
  let longestWindow = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    const isZero = nums[i] == 0 ? 1 : 0;
    if (isZero) zeroCount++;

    while (zeroCount > 1) {
      const isLastRemoveElementZero = nums[start] == 0 ? 1 : 0;
      if (isLastRemoveElementZero) zeroCount--;
      start++;
    }

    longestWindow = Math.max(longestWindow, i - start);
  }

  return longestWindow;
}
