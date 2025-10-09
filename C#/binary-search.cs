public class Solution
{
    public int binarySearch(int[] nums, int target)
    {
        var left = 0;
        var right = nums.Length - 1;
        while (left <= right)
        {
            var mid = left + (right - left) / 2;
            if (nums[mid] == target)
            {
                return mid;
            }
            if (nums[mid] > target)
            {
                right = mid - 1;
            }
            else
            {
                left = mid + 1;
            }
        }
        return -1;
    }
}


10  29   30  50  100 200     300     499
0    1   2   3   4   5       6       7

target = 300
mid = 3 => left = 4
mid = 5, => left = 6
