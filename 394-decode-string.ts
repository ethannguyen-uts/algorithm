/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      while (stack.length) {
        const character = stack.pop();
        if (character !== "[") {
          str = character + str;
        } else {
          break;
        }
      }

      let numberStr = "";
      let numberStartIndex = stack.length - 1;
      while (numberStartIndex >= 0) {
        const char = stack[numberStartIndex];
        if (!isNaN(Number(char))) {
          const numberChar = stack.pop();
          numberStr = numberChar + numberStr;
        } else {
          break;
        }
        numberStartIndex--;
      }

      const n = Number(numberStr);
      const resultStr: string = str.repeat(n);
      for (let j = 0; j < resultStr.length; j++) {
        stack.push(resultStr[j]);
      }
    }
  }
  return stack.join("");
};
