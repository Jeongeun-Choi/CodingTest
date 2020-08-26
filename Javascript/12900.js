function solution(n) {
  let answer = 0;
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    answer = (dp[i - 2] + dp[i - 1]) % 1000000007;
    dp.push(answer);
  }

  return dp[n];
}
