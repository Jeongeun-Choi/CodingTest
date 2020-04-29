const nums = [2,6,4,8,10,9,15];

var findUnsortedSubarray = function(nums) {
    const sorted = [...nums].sort((a,b) => a-b);
    let first;
    let last;
    
    for(let i=0; i < nums.length; i++){
        if(sorted[i] !== nums[i] && first === undefined){
            first = i;
            last = i;
        } else if(sorted[i] !== nums[i] && first !== undefined){
            last = i;
        }
    }

    return first === undefined ? 0 : last-first+1;
};

console.log(findUnsortedSubarray(nums));