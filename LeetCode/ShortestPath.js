const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
];
var shortestPathBinaryMatrix = function(grid) {
  if (grid[0][0] === 1) return -1;

  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1]
  ];
  const queue = [[0, 0, 1]];

  while (queue.length) {
    let [x, y, length] = queue.shift();

    if (x === grid.length - 1 && y === grid.length - 1) {
      return length;
    }

    for (const [dx, dy] of directions) {
      const newx = dx + x;
      const newy = dy + y;

      if (
        newx >= 0 &&
        newy >= 0 &&
        newx < grid.length &&
        newy < grid.length &&
        !grid[newx][newy]
      ) {
        queue.push([newx, newy, length + 1]);
        grid[newx][newy] += 1;
      }
    }
  }

  return -1;
};

console.log(shortestPathBinaryMatrix(grid));
