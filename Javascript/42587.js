const priorities = [1,1,9,1,1,1];
const location = 0;
const arr = [];
let index = 0;
let count = 0;

function solution(priorities, location) {
    priorities.map((v, i)=>{
        location === i ? arr.push(true) : arr.push(false);
    });

    while(priorities){
        let maxNum = Math.max(...priorities);

        if (priorities[0] < maxNum){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else{
            priorities.shift();
            count += 1;
            if(arr.shift()) return count;
        }
    }
}

console.log(solution(priorities, location))