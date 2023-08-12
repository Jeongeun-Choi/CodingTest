function solution(order) {
  let answer = [];
  const orderLen = order.length;
  const ascOrder = Array.from({ length: orderLen }, (_, index) => index + 1);
  const stack = [];
  let orderIndex = 0;
  let ascOrderIndex = 0;

  while (ascOrderIndex < orderLen) {
    const lastStackIndex = stack.length - 1;

    if (ascOrder[ascOrderIndex] === order[orderIndex]) {
      answer.push(order[orderIndex]);
      orderIndex++;
      ascOrderIndex++;
      continue;
    }

    if (lastStackIndex > -1 && order[orderIndex] === stack[lastStackIndex]) {
      answer.push(stack.pop());
      orderIndex++;
      continue;
    }
    stack.push(ascOrder[ascOrderIndex]);
    ascOrderIndex++;
  }

  if (stack.length) {
    while (stack.length) {
      const lastStackIndex = stack.length - 1;
      if (order[orderIndex] === stack[lastStackIndex]) {
        answer.push(stack.pop());
        orderIndex++;
        continue;
      }

      return answer.length;
    }
  }
  return answer.length;
}

const order = [5, 4, 3, 2, 1];
console.log(solution(order));
