const direction = {
  E: [0, 1],
  W: [0, -1],
  S: [1, 0],
  N: [-1, 0],
};

function findStartSpot(parkArray) {
  for (let i = 0; i < parkArray.length; i += 1) {
    const startIndex = parkArray[i].findIndex((park) => park === "S");

    if (startIndex > -1) {
      return [i, startIndex];
    }
  }
}

function solution(park, routes) {
  const parkArray = Array.from(park, (p) => Array.from(p));

  let [x, y] = findStartSpot(parkArray);
  const totalX = parkArray.length - 1;
  const totalY = parkArray[0].length - 1;
  routes.forEach((route) => {
    const [dir, n] = route.split(" ");
    let isDone = false;

    switch (dir) {
      case "E":
        if (totalY < y + parseInt(n, 10)) {
          break;
        }

        for (let i = y; i <= y + parseInt(n, 10); i += 1) {
          if (parkArray[x][i] === "X") {
            isDone = true;
          }
        }

        if (!isDone) {
          y = y + parseInt(n, 10);
        }
        break;

      case "W":
        if (y - parseInt(n, 10) < 0) {
          break;
        }
        for (let i = y; i >= y - parseInt(n, 10); i -= 1) {
          if (parkArray[x][i] === "X") {
            isDone = true;
          }
        }
        if (!isDone) {
          y = y - parseInt(n, 10);
        }
        break;

      case "S":
        if (totalX < x + parseInt(n, 10)) {
          break;
        }

        for (let i = x; i <= x + parseInt(n, 10); i += 1) {
          if (parkArray[i][y] === "X") {
            isDone = true;
          }
        }

        if (!isDone) {
          x = x + parseInt(n, 10);
        }
        break;

      case "N":
        if (x - parseInt(n, 10) < 0) {
          break;
        }

        for (let i = x; i >= x - parseInt(n, 10); i -= 1) {
          if (parkArray[i][y] === "X") {
            isDone = true;
          }
        }

        if (!isDone) {
          x = x - parseInt(n, 10);
        }
        break;
    }
  });

  return [x, y];
}

console.log(solution(["XXX", "XSX", "XXX"], ["E 1"])); // [1,1]
