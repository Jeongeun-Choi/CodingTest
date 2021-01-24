const n = 3;

const factorial = index => {
  if (index === 0) return 0;
  if (index === 1) return 1;
  if (index === 2) return 2;
  const dp = [0, 1, 2];
  let next = 3;

  while (next <= index) {
    dp.push(dp[next - 1] * next);
    next++;
  }

  return dp[index];
};

var countVowelStrings = function(n) {
  const first = n + 5 - 1;
  const second = n;

  const answer =
    factorial(first) / (factorial(first - second) * factorial(second));
  return answer;
};

console.log(countVowelStrings(n));
