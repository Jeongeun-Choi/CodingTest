const board = [[1, 1, 1, 1]];

function solution(board) {
  let answer = 0;
  let check = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(0)
  );

  if (board.length < 2 || board[0].length < 2) {
    return 1;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      check[i][j] = board[i][j];
    }
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (check[i][j] !== 0) {
        let temp = Math.min(
          check[i - 1][j - 1],
          Math.min(check[i - 1][j], check[i][j - 1])
        );

        check[i][j] = temp + 1;
        answer = Math.max(answer, check[i][j]);
      }
    }
  }

  return answer * answer;
}

console.log(solution(board));
