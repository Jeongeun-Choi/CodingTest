function solution(N) {
  var answer = 0;

  let dp = new Array(N).fill(0);

  if (N === 1) return 4;

  for (let i = 0; i < N; i++) {
    if (i <= 1) {
      dp[i] = 1;
    } else {
      dp[i] = dp[i - 2] + dp[i - 1];
    }
  }
  let width = dp[N - 1];
  let height = dp[N - 1] + dp[N - 2];

  answer = (width + height) * 2;

  return answer;
}

console.log(solution(5));
