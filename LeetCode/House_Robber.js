const nums = [2, 1, 1, 2];

var rob = function(nums) {
    let arr = [nums[0], Math.max(nums[0],nums[1])];
    
    if(nums.length === 1){
        return nums[0];
    }
    for(let i = 2; i < nums.length; i++){
        max = arr[i-1];
        if(max < nums[i]+arr[i-2]){
            arr.push(nums[i]+arr[i-2]);
        } else {
            arr.push(max)
        };
    }
    
    return nums.length === 0 ? 0 : Math.max(...arr);
};

console.log(rob(nums));