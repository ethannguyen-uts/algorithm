public class Solution {
    public int UniquePaths(int m, int n) {
        int [][] dp = new int[m + 1][];
        for (var i = m; i > -1; i--){
            dp[i] = new int[n + 1];
            for (var j = n; j > -1; j--){
                dp[i][j] = 0;
            }
        }
        dp[m-1][n] = 1;
       
        for (var k = m - 1; k > -1; k--){
            for (var l = n - 1; l > -1; l--){
                dp[k][l] = dp[k][l+1] + dp[k+1][l];
            }
        }

        return dp[0][0];
    }
}