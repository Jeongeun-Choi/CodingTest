const d = [1,3,2,5,4];
const budget = 9;

function solution(d, budget) {
    var answer = 0;
    let start = 0;
    let finish = 0;

    d.sort((a, b) => a - b);

    while(finish < d.length){
        let sum = 0;

        for(let i = start; i <= finish; i++){
            sum += d[i];
        }
        if(sum <= budget) {
            answer = Math.max(answer, finish - start + 1);
            finish++;
        }else{
            start++;
        }
    }
    return answer;
}

console.log(solution(d, budget))