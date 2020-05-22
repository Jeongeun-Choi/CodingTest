const n = 5;

//어케 푸는지만 알면 쉽넹
function solution(n)
{
    var ans = 0;
    let num = n;
    let remainder = 0;

    while(num > 1){
        if(num % 2 === 1){
            ans += 1;
        } 
        num = parseInt(num / 2)
    }
    return ans + 1;
}

console.log(solution(n))