const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1]
];

const dfs = key => {
  if (computers[key].every(computer => computer === 0)) return;

  for (let i = 0; i < computers.length; i++) {
    if (i === key) {
      computers[key][i] = 0;
      continue;
    }
    if (computers[key][i] !== 0) {
      computers[key][i] = 0;
      dfs(i);
    }
  }
  return;
};

const solution = (n, computers) => {
  let answer = 0;

  for (let i = 0; i < computers.length; i++) {
    if (computers[i].every(computer => computer === 0)) continue;
    dfs(i);
    answer++;
  }

  return answer;
};

console.log(solution(n, computers));
