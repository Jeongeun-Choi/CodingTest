const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(maps) {
  let answer = [];
  let xLen = maps.length;
  let yLen = maps[0].length;
  let isVisited = Array.from(Array(xLen), () => new Array(yLen).fill(false));

  function bfs(x, y) {
    const queue = [[x, y]];
    let foodCount = parseInt(maps[x][y], 10);
    isVisited[x][y] = true;

    while (queue.length > 0) {
      const [dx, dy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = dx + directions[i][0];
        const nextY = dy + directions[i][1];
        if (
          nextX < 0 ||
          nextY < 0 ||
          nextX > xLen - 1 ||
          nextY > yLen - 1 ||
          maps[nextX][nextY] === "X" ||
          isVisited[nextX][nextY]
        ) {
          continue;
        }

        queue.push([nextX, nextY]);
        isVisited[nextX][nextY] = true;
        foodCount += parseInt(maps[nextX][nextY], 10);
      }
    }
    return foodCount;
  }

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (maps[i][j] !== "X" && !isVisited[i][j]) {
        answer.push(bfs(i, j));
      }
    }
  }

  if (answer.length === 0) {
    return [-1];
  }
  return answer.sort((a, b) => a - b);
}

const maps = ["XXX", "XXX", "XXX"];
console.log(solution(maps));
