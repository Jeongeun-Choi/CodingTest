const mat = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2]
];

var diagonalSort = function(mat) {
  const y = mat.length;
  const x = mat[0].length;
  let moveX = 0;
  let moveY = 0;
  let answer = mat;

  if (x === 1) return mat;

  while (moveX < x) {
    let array = [];
    let tempIndex = moveX;

    for (let i = moveY; i < y; i++) {
      if (tempIndex >= x) break;
      array.push(mat[i][tempIndex++]);
    }

    array.sort((a, b) => a - b);

    tempIndex = moveX;
    for (let i = moveY; i < y; i++) {
      if (tempIndex >= x) break;
      answer[i][tempIndex++] = array[i];
    }

    moveX++;
  }

  moveY += 1;
  while (moveY < y) {
    let array = [];
    moveX = 0;
    let tempIndex = moveX;

    for (let i = moveY; i < y; i++) {
      array.push(mat[i][tempIndex++]);
    }

    array.sort((a, b) => a - b);
    tempIndex = moveX;

    for (let i = moveY; i < y; i++) {
      answer[i][tempIndex] = array[tempIndex];
      tempIndex++;
    }

    moveY++;
  }
  return answer;
};

console.log(diagonalSort(mat));
