function rob(nums: number[]): number {
  const dp = [];
  dp.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const lastTwo = i == 1 ? 0 : dp[i - 2];
    if (nums[i] + lastTwo > dp[i - 1]) {
      dp[i] = nums[i] + lastTwo;
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[dp.length - 1];
}
