const costs = [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469]
];
// 둘의 격차가 작은 순으로 정렬
// 259 - 770 은 음수니까 제일 앞으로
var twoCitySchedCost = function(costs) {
  let answer = 0;

  costs.sort((a, b) => {
    return a[0] - a[1] - (b[0] - b[1]);
  });

  for (let i = 0, j = costs.length / 2; i < costs.length / 2; i++, j++) {
    answer += costs[i][0] + costs[j][1];
  }

  return answer;
};

console.log(twoCitySchedCost(costs));
