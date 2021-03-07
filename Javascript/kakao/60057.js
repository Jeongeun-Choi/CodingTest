const s = 'abcabcdede';

function setAnswer(answer, stack) {
  let number = stack.length;
  let stackLast = stack[number - 1];

  if (number === 1) {
    answer += stackLast;
  } else {
    answer += String(number).concat(stackLast);
  }

  return answer;
}

function solution(s) {
  let min = Infinity;

  for (let index = 1; index <= s.length; index++) {
    let left = 0;
    let right = index;
    let stack = [];
    let answer = '';
    let mid = Math.floor(s.length / 2);

    while (right <= s.length && index <= mid) {
      let temp = [...s].slice(left, right).join('');
      let lastIndex = stack.length - 1;

      if (stack[lastIndex] !== temp && lastIndex >= 0) {
        answer = setAnswer(answer, stack);
        stack = [];
      }

      stack.push(temp);
      left += index;
      right += index;
      lastIndex = stack.length - 1;

      if (right > s.length && stack.length) {
        answer = setAnswer(answer, stack);
      }
    }

    while (left < s.length) {
      answer += s[left];
      left++;
    }

    min = Math.min(min, answer.length);
  }

  return min;
}

console.log(solution(s));
