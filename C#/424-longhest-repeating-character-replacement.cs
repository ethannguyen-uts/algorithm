public class Solution {
    public int CharacterReplacement(string s, int k) {
        var longhest = 0;
        var left = 0;
        var right = 0;

        var dictionary = new Dictionary<string, int>();
        dictionary.Add(s[0].ToString(), 1);
        while(right < s.Length){
            var numsCharToReplace = NumOfCharacterNeedToBeReplaced(dictionary);
            if (numsCharToReplace <= k){
                longhest = Math.Max(longhest, right - left + 1);
                right+=1;
                if (right < s.Length){
                    var character = s[right].ToString();
                     if (dictionary.ContainsKey(character))
                     {
                        dictionary[character] += 1;
                     } else {
                        dictionary[character] = 1;
                     }
                }
            } else {
                  var character = s[left].ToString();
                  if (dictionary[character] > 1){
                    dictionary[character]--;
                  } else {
                    dictionary.Remove(character);
                  }
                  left+=1;
            }
        }
        return longhest;
    }

    public int NumOfCharacterNeedToBeReplaced(Dictionary<string, int> d){
        var max = 0;
        var count = 0;
        if(d.Keys.ToList().Count == 1){
            return 0;
        }

        foreach (var entry in d){
            if(entry.Value > max){
                max = entry.Value;
            }
            count += entry.Value;
        }
        return count - max;
    }
}
