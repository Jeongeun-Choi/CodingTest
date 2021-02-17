function solution(n) {
  let answer = 0;
  let left = 1;
  let right = 1;
  let sum = 0;
  let numbers = Array.from({ length: n + 1 }).map((_, index) => index);

  while (right <= n) {
    if (left === right) {
      sum = numbers[right];
    } else {
      sum = numbers
        .slice(left, right + 1)
        .reduce((acc, cur) => (acc += cur), 0);
    }

    if (sum === n) {
      answer += 1;
      right++;
    }
    if (sum < n) {
      right++;
    }

    if (sum > n) {
      left++;
    }
  }
  return answer;
}

console.log(solution(15));
