function solution(k, m, score) {
  let answer = 0;
  const sortingScore = score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    if (i + m > score.length) {
      break;
    }
    const box = sortingScore.slice(i, i + m);
    const minApple = Math.min(...box);

    answer += minApple * m;
  }
  return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
