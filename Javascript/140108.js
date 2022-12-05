function solution(s) {
  let answer = 0;
  let string = '';
  let sameNumCount = 0;
  let otherNumCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (!string) {
      string = s[i];
      sameNumCount = 1;
      continue;
    }

    if (string === s[i]) {
      sameNumCount += 1;
    } else {
      otherNumCount += 1;
    }

    if (sameNumCount === otherNumCount) {
      answer += 1;
      string = '';
      sameNumCount = 0;
      otherNumCount = 0;
    }
  }

  if (string) {
    answer += 1;
  }
  return answer;
}

console.log(solution('abracadabra'));
