function solution(s) {
  let answer = [];
  let tempIndex = 0;

  for (let i = 0; i < s.length; i += 1) {
    tempIndex = i - 1;
    while (tempIndex >= 0) {
      if (s[tempIndex] === s[i]) {
        answer.push(i - tempIndex);
        break;
      }
      tempIndex -= 1;
    }
    if (tempIndex < 0) {
      answer.push(-1);
    }
  }
  return answer;
}

console.log(solution('foobar'));
