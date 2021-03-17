const routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3]
];

function solution(routes) {
  routes.sort((a, b) => a[0] - b[0]);
  let answer = 1;
  let cameras = [routes[0]];

  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] <= cameras[answer - 1][1]) {
      cameras[answer - 1] = [
        routes[i][0],
        Math.min(cameras[answer - 1][1], routes[i][1])
      ];
    } else {
      answer += 1;
      cameras.push(routes[i]);
    }
  }
  return answer;
}

console.log(solution(routes));
