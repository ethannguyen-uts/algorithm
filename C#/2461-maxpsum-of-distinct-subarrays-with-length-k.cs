public class Solution {
    public long MaximumSubarraySum(int[] nums, int k) {
        long max_sum = 0;
        var start = 0;
        long current_sum = 0;
        var state = new Dictionary<int, int>();

        for (var end = 0; end < nums.Length; end++){
            current_sum += nums[end];
            var exist = state.TryGetValue(nums[end], out var occurent);
            if (exist)
            {
                state[nums[end]] = occurent + 1;
            } else {
                state[nums[end]] = 1;
            }

            if (end - start + 1 == k)
            {
                if (state.Count == k)
                {
                    max_sum = Math.Max(max_sum, current_sum);
                }

                state[nums[start]] -= 1;
                current_sum = current_sum - nums[start];
                if (state[nums[start]] == 0){
                    state.Remove(nums[start]);
                }
                start++;
            }
        }

        return max_sum;
    }
}