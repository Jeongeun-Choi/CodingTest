//DP로 풂.
const nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
    let answer = [nums[0]];

    for(let i = 1; i < nums.length; i++){
        if(nums[i] < answer[i-1] + nums[i]){
            answer.push(answer[i-1]+nums[i]);
        } else{
            answer.push(nums[i]);
        }
    }

    return Math.max(...answer);
};

console.log(maxSubArray(nums));