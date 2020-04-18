// 11 - 42 12-44 13-111 14-112 15-114 16-121 17-122 18-124 19-141
const n = 10;
function solution(n) {
    let answer = '';
    let num = 0;

    while(n != 0){
        num = (n % 3 === 0 ? 4 : n % 3);
        answer = num.toString() + answer;
        n = (num === 4 ? parseInt(n/3) - 1 : parseInt(n/3));
    }
    return answer;
}

console.log(solution(n));

//다른 사람 풀이
function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}
//[1,2,4][(n-1) % 3]은 대체 왜 한거지??