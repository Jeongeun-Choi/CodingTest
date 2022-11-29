function solution(topping) {
  let answer = 0;
  const elementNumbers = new Map();

  topping.forEach(t => {
    if (elementNumbers.has(t)) {
      const value = elementNumbers.get(t);
      value.duplicated++;
      elementNumbers.set(t, value);
    } else {
      elementNumbers.set(t, { duplicated: 1, visited: false });
    }
  });

  let [me, brother] = [0, elementNumbers.size];

  for (let index = 0; index < topping.length; index++) {
    const element = topping[index];
    const value = elementNumbers.get(element);
    if (value.duplicated >= 1) {
      value.duplicated--;
      if (value.duplicated === 0) {
        brother--;
      }
    }

    if (!value.visited) {
      value.visited = true;
      me++;
    }
    elementNumbers.set(element, value);
    if (me === brother) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
