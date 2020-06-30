const amount = 5;
const coins = [1, 2, 5];

var change = function(amount, coins) {
  let dp = new Array(amount).fill(0);
  dp.unshift(1);

  for (const coin of coins) {
    for (let j = coin; j <= amount; j++) {
      if (j - coin >= 0) {
        dp[j] += dp[j - coin];
      }
    }
  }
  return dp[amount];
};

console.log(change(amount, coins));
