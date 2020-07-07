const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
];

var islandPerimeter = function(grid) {
  const direct = {
    1: [1, 0],
    2: [0, 1],
    3: [-1, 0],
    4: [0, -1]
  };

  for (let h = 0; h < grid.length; h++) {
    for (let w = 0; w < grid[0].length; w++) {
      if (grid[h][w] === 1) {
        grid[h][w] = 2;
        return BFS(h, w);
      }
    }
  }

  function BFS(h, w) {
    let queue = [];
    let count = 0;

    queue.push([h, w]);

    while (queue.length !== 0) {
      let [nh, nw] = queue.shift();

      for (let k = 1; k <= 4; k++) {
        let [dh, dw] = direct[k];
        let ch = dh + nh;
        let cw = dw + nw;

        if (
          ch < 0 ||
          ch >= grid.length ||
          cw < 0 ||
          cw >= grid[0].length ||
          grid[ch][cw] === 0
        ) {
          count += 1;
        } else if (
          ch >= 0 &&
          ch < grid.length &&
          cw >= 0 &&
          cw < grid[0].length &&
          grid[ch][cw] === 1
        ) {
          queue.push([ch, cw]);
          grid[ch][cw] = 2;
        }
      }
    }

    return count;
  }
};

console.log(islandPerimeter(grid));
