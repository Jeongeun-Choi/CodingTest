function makeAnswerObject(partner) {
  return [...partner].reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }

    return acc;
  }, {});
}

function solution(X, Y) {
  let answer = '';

  const XObject = makeAnswerObject(X);
  const YObject = makeAnswerObject(Y);

  for (const num in XObject) {
    const Xcount = XObject[num];
    const Ycount = YObject[num];

    if (!Ycount) {
      continue;
    }

    answer = num.repeat(Math.min(Xcount, Ycount)).concat(answer);
  }

  if (!answer) {
    return '-1';
  }
  if ([...answer].every(element => element === '0')) {
    return '0';
  }
  return answer;
}

console.log(solution('100', '203045'));
