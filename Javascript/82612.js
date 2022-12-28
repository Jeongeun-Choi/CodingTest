function solution(price, money, count) {
  let answer = 0;
  let totalPrice = 0;

  for (let i = 1; i <= count; i += 1) {
    totalPrice += price * i;
  }

  if (totalPrice > money) {
    answer = totalPrice - money;
  }

  return answer;
}

console.log(solution(3, 20, 4));
