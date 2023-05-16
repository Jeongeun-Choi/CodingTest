function findStartDot(wallpaper, initStartDot) {
  let startDot = [...initStartDot];

  for (let index = 0; index < wallpaper.length; index++) {
    const y = wallpaper[index].split("").findIndex((value) => value === "#");

    if (y < 0) {
      continue;
    }

    if (startDot[0] < index && startDot[1] > y) {
      startDot[1] = y;
    }
  }

  return startDot;
}

function findEndDot(wallpaper, initEndDot) {
  let endDot = [...initEndDot];

  for (let y = wallpaper[0].length - 1; y >= 0; y--) {
    for (let x = wallpaper.length - 1; x >= 0; x--) {
      if (wallpaper[x][y] == "#" && endDot[0] < x + 1 && endDot[1] > y + 1) {
        endDot[0] = x + 1;
      }
    }
  }

  return endDot;
}

function solution(wallpaper) {
  let initStartDot = [];
  let initEndDot = [];

  for (let i = 0; i < wallpaper.length; i++) {
    const y = wallpaper[i].split("").findIndex((value) => value === "#");

    if (y > -1) {
      initStartDot = [i, y];
      break;
    }
  }

  for (let i = wallpaper[0].length - 1; i >= 0; i--) {
    let isFind = false;

    for (let x = wallpaper.length - 1; x >= 0; x--) {
      if (wallpaper[x][i] === "#") {
        initEndDot = [x + 1, i + 1];
        isFind = true;
        break;
      }
    }

    if (isFind) {
      break;
    }
  }
  const startDot = findStartDot(wallpaper, initStartDot);
  const endDot = findEndDot(wallpaper, initEndDot);
  return [...startDot, ...endDot];
}

const wallpaper = ["..", "#."];

console.log(solution(wallpaper));
