const n = 4;

var climbStairs = function(n) {
    let first = 1;
    let second = 2;
    let temp = 0;

    if(n === 1) return 1;
    if(n === 2) return 2; 

    for(let i = 2; i < n; i++){
        temp = first;
        first = second;
        second = temp+second;
    }
    return second;
};

console.log(climbStairs(n));