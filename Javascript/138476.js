function makeTangerineDescendingOrder(tangerine) {
  const tangerineObject = tangerine.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
      return acc;
    }

    acc[cur] += 1;
    return acc;
  }, {});

  return Object.entries(tangerineObject).sort((a, b) => b[1] - a[1]);
}

function solution(k, tangerine) {
  let answer = 0;

  const tangerineDescending = makeTangerineDescendingOrder(tangerine);
  let totalCount = 0;

  for (const [key, value] of tangerineDescending) {
    totalCount += value;
    answer += 1;

    if (totalCount >= k) {
      break;
    }
  }

  if (totalCount < k) {
    return 0;
  }
  return answer;
}

console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
