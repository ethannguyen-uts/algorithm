function longestCommonSubsequence(text1: string, text2: string): number {
  const memo = new Map<string, number>();

  const recur = (m: number, n: number): number => {
    if (m === text1.length || n === text2.length) {
      return 0;
    }

    const key = `${m},${n}`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }

    let result: number;
    if (text1[m] === text2[n]) {
      result = 1 + recur(m + 1, n + 1);
    } else {
      result = Math.max(recur(m + 1, n), recur(m, n + 1));
    }

    memo.set(key, result);
    return result;
  };

  return recur(0, 0);
}
