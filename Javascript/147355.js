function solution(t, p) {
  let answer = 0;
  const tLen = t.length;
  const pLen = p.length;

  for (let i = 0; i <= tLen - pLen; i += 1) {
    const temp = t.substr(i, pLen);

    if (+temp <= +p) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution('10203', '15'));
