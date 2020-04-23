const progresses = [93,30,55];
const speeds = [1,30,5];

//이렇게도 푼다!
function solution(progresses, speeds) {
    let answer = [0];
    let put = []; 
    let compare = 0;
    let count = 0;

    progresses.map((v, i) => {
        let speed = speeds[i];
        let remainder = 100 - v;
        let day = Math.ceil(remainder / speed);

        put.push(day);
    })
    
    compare = put[0];

    for(let i = 0; i < put.length; i++){
        console.log(compare);
        if(put[i] <= compare){
            answer[count] += 1;
        } else {
            compare = put[i];
            answer[++count] = 1;
        }
    }
    return answer;
}

//내가 푼 것
function solution(progresses, speeds) {
    let answer = [];
    let put = []; 
    let compare = 0;
    let count = 1;

    progresses.map((v, i) => {
        let speed = speeds[i];
        let remainder = 100 - v;
        let day = Math.ceil(remainder / speed);

        put.push(day);
    })
    compare = put.shift();

    put.map((current) => {
        if (compare < current){
            compare = current;
            answer.push(count);
            count = 1;
        } else {
            count += 1;
        }
    });

    answer.push(count);
    return answer;
}


console.log(solution(progresses, speeds));