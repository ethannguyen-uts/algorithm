public class Solution {
    public IList<int> FindClosestElements(int[] arr, int k, int x) {
        var maxHeapComparer = Comparer<int>.Create((x, y)=>y.CompareTo(x));
        var maxHeap = new PriorityQueue<int, int>(maxHeapComparer);
        for (var i = 0; i < arr.Length; i++){
            var num = arr[i];
            if (maxHeap.Count < k) {
                maxHeap.Enqueue(num, Math.Abs(num - x));
            } else {
                var maxHeapValue = maxHeap.Peek();
                if (Math.Abs(num - x) < Math.Abs(maxHeapValue - x)){
                    maxHeap.Dequeue();
                    maxHeap.Enqueue(num, Math.Abs(num - x));
                }
            }
        }

        var result = new int[k];
        for (var i = 0; i < k; i++){
            result[i] = maxHeap.Dequeue();
        }
        Array.Sort(result);
        return result;
    }
}
 


    