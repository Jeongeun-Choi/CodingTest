function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }

    stack.push(i);
  }
  return answer;
}

const numbers = [10, 1, 10, 2, 10, 3, 10, 10, 10, 11, 11, 11, 12];
console.log(solution(numbers));
