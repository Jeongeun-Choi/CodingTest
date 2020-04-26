//js로는 유효 숫자 범위가 넘어서 풀지 못함 ㅋㅎㅋㅎㅋㅎ;;;
const n = 6;
const times = [7, 10];

function sortTimes(a, b) {
    return a - b;
}

function solution(n, times) {
    times.sort(sortTimes);
    let answer = 0;
    let left = 1;   //1부터
    let right = times[times.length-1] * n;  //최악의 경우를 생각
    let mid = 0;
    let count = 0;

    while(left < right){
        mid = parseInt((left+right)/2);
        times.map(time => {
            count = count + parseInt(mid / time);
        })
        if (count > n){
            right = mid - 1;
        } else if(count < n){
            left = mid + 1;
        } else{
            answer = mid;
            right = mid - 1;
        }
        count = 0;
    }
    return answer;
}

console.log(solution(n, times));