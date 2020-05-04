const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

function solution(board, moves) {
    let arr = [];
    let answer = 0;

    moves.map(move => {
        let location = 0;
        while(location !== board.length){
            if(board[location][move-1] !== 0){
                if(arr && (board[location][move-1] === arr[arr.length - 1])){
                    arr.pop();
                    answer++;
                } else{
                    arr.push(board[location][move-1]);
                }
                board[location][move-1] = 0;
                break;
            } else{
                location++;
            }
        }
    })

    return answer*2;
}

console.log(solution(board, moves));