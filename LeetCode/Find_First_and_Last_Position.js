const nums = [5,7,7,8,8,9];
const target = 8;

//양 끝에서 시작! 하나씩 줄여 나간다.
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let answer = [];

    if(nums.length === 1) {
        if(nums[0] === target) return [0, 0];
    }
    while(left < right){
        if(nums[left] !== target && nums[right] !== target) {
            right--;
            left++;
        }
        if(nums[left] === target && nums[right] === target) return [left, right];
        if(nums[left] === target && nums[right] !== target) {
            answer = [left];
            right--;
        }
        if(nums[left] !== target && nums[right] === target) {
            answer = [right];

        }
    }

    return answer.length === 0 ? [-1, -1] : [answer[0], answer[0]];
};

console.log(searchRange(nums, target));