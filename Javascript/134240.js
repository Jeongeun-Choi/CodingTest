function solution(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    const repeatCount = Math.floor(food[i] / 2);

    answer += i.toString().repeat(repeatCount);
  }

  answer = answer + '0' + [...answer].reverse().join('');
  return answer;
}

console.log(solution([1, 7, 1, 2]));
