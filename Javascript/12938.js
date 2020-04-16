let n = 2;
let s = 8;

function solution(n, s){
    let answer = [];
    let num = 0;
    if(s < n){
        answer.push(-1);
        return answer;
    }
    for(let i = n; i >= 1; i--){
        num = parseInt(s / i, 10);
        answer.push(num);
        s -= num;
    }
    return answer;
}

console.log(solution(n, s))