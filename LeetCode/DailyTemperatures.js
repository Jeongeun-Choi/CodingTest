const T = [73, 74, 75, 71, 69, 72, 76, 73];

var dailyTemperatures = function(T) {
    let stack = [0];
    let answer = new Array(T.length).fill(0);

    console.log(answer);
    for(let i = 1; i < T.length; i++){
        while(stack.length && T[i] > T[stack[stack.length-1]]){
            let temp = stack.pop();
            answer[temp] = i - temp;
        }
        stack.push(i);
    }

    return answer;
};

console.log(dailyTemperatures(T));