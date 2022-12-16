function solution(a, b, n) {
  let answer = 0;

  let bottles = n;

  while (bottles >= a) {
    const lastBottles = Math.floor(bottles / a) * b;

    answer += lastBottles;

    bottles = lastBottles + (bottles % a);
  }
  return answer;
}

console.log(solution(3, 1, 20));
