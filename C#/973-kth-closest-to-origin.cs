public class Solution {
    public int[][] KClosest(int[][] points, int k) {

        var minHeap = new PriorityQueue<int[], double>();
        for (var i = 0; i < points.Length; i++){
            var distant = CalculateDistant(points[i][0], points[i][1]);
            minHeap.Enqueue(points[i], distant);
        }

        int[][] result = new int[k][];
        for (var i = 0; i < k; i++){
            var item = minHeap.Dequeue();
            result[i] = new int[]{item[0], item[1]};
        }

        return result;
    }

    public double CalculateDistant(int x, int y)
    {
        return Math.Sqrt(Math.Pow(x, 2) + Math.Pow(y, 2));
    }
}