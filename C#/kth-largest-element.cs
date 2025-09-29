public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        var maxHeapComparer = Comparer<int>.Create((x, y) => y.CompareTo(x));

        PriorityQueue<int, int> maxHeap = new PriorityQueue<int, int>(maxHeapComparer);
        for (var i = 0; i < nums.Length; i++){
            maxHeap.Enqueue(nums[i], nums[i]);
        }

        int item = 0;
        for (var i = 0; i < k; i++){
            item = maxHeap.Dequeue();
        }
        return item;

    }
}