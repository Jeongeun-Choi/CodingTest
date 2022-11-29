function getKnightPower(number) {
  const numberArray = [];

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      //제곱근을 이용해서 약수를 구한다.
      if (i % j === 0) {
        count += 1;
        if (i / j != j) count += 1;
      }
    }

    numberArray.push(count);
  }

  return numberArray;
}

function solution(number, limit, power) {
  let powerArray = getKnightPower(number);

  let answer = powerArray.reduce((acc, cur) => {
    if (cur > limit) {
      acc += power;
      return acc;
    }

    acc += cur;
    return acc;
  }, 0);

  return answer;
}

console.log(solution(10, 3, 2));
