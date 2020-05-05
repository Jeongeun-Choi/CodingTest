const nums = [2,0,2,1,1,0];

var sortColors = function(nums) {
    nums.sort((a,b) => a-b);
    return nums;
};

console.log(sortColors(nums));