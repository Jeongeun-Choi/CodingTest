const N = 4;
const K = 3;
const medals = [
  [1, 1, 2, 0],
  [2, 0, 1, 0],
  [3, 0, 1, 0],
  [4, 0, 0, 1]
];

const solution = (N, K, medals) => {
  let medalsObj = {};

  for (const medal of medals) {
    let [order, gold, silver, bronze] = medal;
    medalsObj[order] = [gold, silver, bronze];
  }

  let score = new Array(N + 1).fill(0);
  let count = 0;
  for (const medal in medalsObj) {
    let [gold, silver, bronze] = medalsObj[medal];
    score[medal] = gold * 5 + silver * 3 + bronze;

    if (medal <= K && score[medal] !== score[medal - 1]) {
      count++;
    }
  }

  return count;
};

console.log(solution(N, K, medals));
