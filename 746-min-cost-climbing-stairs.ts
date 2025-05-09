function minCostClimbingStairs(cost: number[]): number {
  if (cost.length == 2) {
    return Math.min(cost[0], cost[1]);
  }
  const dp: Map<number, number> = new Map();
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
  }

  let maxIndex = cost.length - 1;

  return Math.min(
    dp[maxIndex - 1] + cost[maxIndex - 1],
    dp[maxIndex] + cost[maxIndex]
  );
}

/*
step 0 => cost 0

Step 1 => 0 || cost of step 0

Step 2 => cost till step 0 + cost of step 0 || cost till step 1 + cost of step 1

step 3 => cost till step 1 + cost of step 1 || cost till step 2 + cost of step 2

Step n => cost till step n - 2 + cost of step n - 2 || cost till step n - 1 +    cost of step n - 1
*/
