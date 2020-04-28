const nums = [3,2,4];
const target = 6;

var twoSum = function(nums, target) {

    //다른 사람 코드
    /*const map = {};

    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];

        if (another in map) {
            return [map[another], i];
        }

        map[nums[i]] = i;   //객체 만들기
    }

    return null;*/

    //내가 짠 코드
    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
};

console.log(twoSum(nums, target));