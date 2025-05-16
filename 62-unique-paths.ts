function uniquePaths(m: number, n: number): number {
  const dp: number[][] = [];
  for (let i = 0; i <= m; i++) {
    let arr: number[] = [];
    for (let j = 0; j <= n; j++) {
      arr.push(0);
    }
    dp.push(arr);
  }

  // Set up the outbound to be 1
  dp[m - 1][n] = 1;

  for (let k = m - 1; k > -1; k--) {
    for (let l = n - 1; l > -1; l--) {
      dp[k][l] = dp[k][l + 1] + dp[k + 1][l];
    }
  }

  return dp[0][0];
}

/*
start with the destination cell
build up from bottom to top (because robot can only move right or down)
value in each cell is number of ways to reach to that cell from the exit
build from bottom to top to get the value at cell [0,0]
=> we know the total ways to reach the end starting from top
example: 2 * 3

3 (start cell)      1               0
2                   1               0
1                   1 (destination cell)    1 (outbound cell)
0                   0               0
*/
