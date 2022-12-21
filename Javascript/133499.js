function solution(babbling) {
  const pronunciation = /^(aya|ye|woo|ma)+$/g;
  const double = /(ayaaya|yeye|woowoo|mama)/g;
  let answer = 0;

  for (let word of babbling) {
    if (word.search(pronunciation) > -1) {
      if (word.search(double) > -1) {
        continue;
      }
      answer += 1;
    }
  }
  return answer;
}

// console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));

console.log(solution(['myea']));
