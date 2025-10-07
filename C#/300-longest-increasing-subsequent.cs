public class Solution {
    public int LengthOfLIS(int[] nums) {
        var dp = new int[nums.Length];
        for(var i = 0; i < dp.Length; i++){
            dp[i] = 1;
        }

        for (var j = nums.Length - 1; j > -1; j--){
            for (var k = j + 1; k < nums.Length; k++){
                if (nums[j] < nums[k]){
                    dp[j] = Math.Max(dp[j], 1 + dp[k]);
                }
            }
        }
        return dp.Max();
    }
}