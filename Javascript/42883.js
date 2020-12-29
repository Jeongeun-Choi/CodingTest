const number = '987632';
const k = 3;

const solution = (number, k) => {
  let stack = [];
  let count = 0;

  for (const num of number) {
    if (k === number.length - stack.length) break;
    if (stack.length === 0) {
      stack.push(num);
      continue;
    }

    const numToNumber = Number(num);

    while (numToNumber > stack[stack.length - 1] && k > count) {
      stack.pop();
      count++;
    }
    stack.push(num);
  }

  return stack.join('');
};

console.log(solution(number, k));
