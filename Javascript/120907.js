function getAnswer(x, mathSymbol, y, z) {
  const X = parseInt(x, 10);
  const Y = parseInt(y, 10);
  const Z = parseInt(z, 10);
  let answer = 0;

  switch (mathSymbol) {
    case '+':
      answer = X + Y;
      return answer === Z;

    case '-':
      answer = X - Y;
      return answer === Z;
  }
}

function solution(quiz) {
  let answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let [x, mathSymbol, y, equl, z] = quiz[i].split(' ');

    if (getAnswer(x, mathSymbol, y, z)) {
      answer.push('O');
    } else {
      answer.push('X');
    }
  }
  return answer;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
