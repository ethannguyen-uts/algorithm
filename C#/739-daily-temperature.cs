

public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        var len = temperatures.Length;
        var result = new int[len];
        var stack = new Stack<int>();

        for (var i = temperatures.Length - 1; i > -1; i--){
            while (stack.Count > 0 && temperatures[i] >= temperatures[stack.Peek()]){
                stack.Pop();
            }

            if (stack.Count == 0){
                result[i] = 0;
            } else {
                result[i] = stack.Peek() - i;
            }
              stack.Push(i);
        }
        return result;
    }
}
