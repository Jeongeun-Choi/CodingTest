const heights = [6,9,5,7,4];

function solution(heights) {
    // let answer = [];
    // let currentNum = 0;
    // let count = 0;

    // while (heights.length !== 0) {
    //     currentNum = heights.pop();  

    //     for(let i = heights.length - 1; i >= 0; i--){
    //         if (currentNum < heights[i]){
    //             answer.unshift(i+1);
    //             count = 0;
    //             break;
    //         };
    //         count += 1;  
    //     };

    //     if (count == heights.length){
    //         answer.unshift(0);
    //         count = 0;
    //     };
    // };

    return heights.map((v, i) => {
        while(i){
            console.log(i)
            i--;
            if(heights[i] > v){
                return i+1;
            }
        }
        return 0;
    }); //아 map으로 할라했는데 안돼서 그냥 for문으로 했는데 이렇게 하면 되는구나....
}

console.log(solution(heights))

