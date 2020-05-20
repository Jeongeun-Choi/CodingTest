const cookie = [1,1,2,3];

function solution(cookie) {
    var answer = 0;
    let left = 0;
    let right = cookie.length - 1;
    let leftSum = 0;
    let rightSum = 0;

    if(cookie.length < 2) return 0;
    if(cookie.length === 2){
        if(cookie[0] === cookie[1]) return cookie[0];
        else return 0;
    }

    for(let i = 0; i < cookie.length - 1; i++){
        left = i;
        leftSum = cookie[left];
        right = i + 1;
        rightSum = cookie[right];

        while(true){
            if(leftSum === rightSum) {
                answer = Math.max(answer, leftSum);
            }

            if(left > 0 && leftSum <= rightSum){
                left--;
                leftSum += cookie[left];
            } else if(right < cookie.length - 1 && leftSum >= rightSum){
                right++;
                rightSum += cookie[right];
            } else break;
        }
    }

    return answer;
}

console.log(solution(cookie))