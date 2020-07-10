const rowIndex = 3;

var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let answer = [[1], [1, 1]];
  let i = 2;
  if (rowIndex >= 2) {
    while (i <= rowIndex) {
      let temp = [];
      for (let j = 0; j < answer[i - 1].length; j++) {
        if (j === 0) {
          temp.push(1);
        } else {
          temp.push(answer[i - 1][j] + answer[i - 1][j - 1]);
        }
      }
      temp.push(1);
      answer.push(temp);
      i++;
    }
  }
  return answer[rowIndex];
};

console.log(getRow(rowIndex));
