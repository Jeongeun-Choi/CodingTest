const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[i] > prices[j]) break;
      else {
        let sell = prices[j] - prices[i];
        if (max < sell) {
          max = sell;
        }
      }
    }
  }
  return max;
};

console.log(maxProfit(prices));
