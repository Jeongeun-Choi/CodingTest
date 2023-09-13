function solution(sequence, k) {
  let answer = [0, Infinity];
  let left = 0;
  let right = 0;
  let total = sequence[0];

  while (left < sequence.length && right < sequence.length) {
    if (k === total) {
      if (answer[1] - answer[0] > right - left) {
        answer = [left, right];
      }
      left += 1;
      right += 1;
      total -= sequence[left - 1];
      total += sequence[right];
    }

    if (k < total) {
      left += 1;
      total -= sequence[left - 1];
    }

    if (k > total) {
      right += 1;
      total += sequence[right];
    }
  }
  return answer;
}

const sequence = [2, 2, 2, 2, 2];
const k = 6;

console.log(solution(sequence, k));
