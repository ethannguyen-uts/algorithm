public class Solution {
    public int MaxScore(int[] cardPoints, int k) {
        var sum = cardPoints.Sum();
        var totalCards = cardPoints.Length;

        if (k == totalCards){
            return sum;
        }

        var window = totalCards - k                                                         ;
        var left = 0;
        var right = window - 1;

        var totalWindow = 0;
        for (var i = 0; i < window; i++){
            totalWindow+=cardPoints[i];
        }
        var max = 0;

        while (right < cardPoints.Length){
            max = Math.Max(max, sum - totalWindow);
            right+=1;
            left+=1;
            if (right < cardPoints.Length){
                totalWindow = totalWindow + cardPoints[right] - cardPoints[left - 1];
            }
        }
        return max;
    }
}