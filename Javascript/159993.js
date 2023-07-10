const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution(maps) {
  const xLen = maps.length;
  const yLen = maps[0].length;
  let startToLever = Infinity;
  let leverToExit = Infinity;

  function bfs(x, y, target) {
    const queue = [[x, y, -1]];
    let isVisited = Array.from(Array(xLen), () => new Array(yLen).fill(false));
    isVisited[x][y] = true;

    while (queue.length > 0) {
      const [dx, dy, value] = queue.shift();

      if (maps[dx][dy] === target) {
        return value + 1;
      }

      for (let i = 0; i < 4; i++) {
        const nextX = dx + directions[i][0];
        const nextY = dy + directions[i][1];
        if (
          nextX < 0 ||
          nextY < 0 ||
          nextX >= xLen ||
          nextY >= yLen ||
          maps[nextX][nextY] === "X"
        ) {
          continue;
        }
        if (!isVisited[nextX][nextY]) {
          queue.push([nextX, nextY, value + 1]);
          isVisited[nextX][nextY] = true;
        }
      }
    }
    return -1;
  }
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (maps[i][j] === "S") {
        startToLever = bfs(i, j, "L");
      }

      if (maps[i][j] === "L") {
        leverToExit = bfs(i, j, "E");
      }
    }
  }

  if (startToLever === -1 || leverToExit === -1) {
    return -1;
  }

  return startToLever + leverToExit;
}

const maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];

console.log(solution(maps));
