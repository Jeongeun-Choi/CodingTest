const n = 7;

var getMaximumGenerated = function(n) {
  const dp = [0, 1];

  if (n <= 1) {
    return dp[n];
  }

  let index = 2;
  while (index <= n) {
    if (index % 2 === 0) {
      const i = index / 2;
      dp.push(dp[i]);
    } else {
      const i = (index - 1) / 2;
      dp.push(dp[i + 1] + dp[i]);
    }
    index++;
  }

  return Math.max(...dp);
};

console.log(getMaximumGenerated(n));
