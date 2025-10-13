public class Solution {
    public bool IsValid(string s) {
        var stack = new List<char>();
        var dict = new Dictionary<char, char>(){
            [')'] = '(',
            [']'] = '[',
            ['}'] = '{',
        };

        for (var i = 0; i < s.Length; i++){
            if (s[i] == '(' || s[i] == '[' || s[i] == '{'){
                stack.Add(s[i]);
            } else {
                if (stack.Count == 0){
                    return false;
                }
                var head = stack[stack.Count - 1];
                if (head != dict[s[i]]){
                    return false;
                }
                stack.RemoveAt(stack.Count - 1);
            }
        }
        return stack.Count == 0;
    }
}