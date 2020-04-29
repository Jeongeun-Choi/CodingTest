const nums = [3,3,4];

var majorityElement = function(nums) {
    //내 풀이
    const count = {};
    let answer = 0;

    nums.map(num => {
        count[num] > 0 ? count[num] += 1 : count[num] = 1;
    });
    
    let max = Math.max(...Object.values(count));
    Object.keys(count).map(key => {
        if(count[key] === max) answer = key;
    })

    return answer;

    //더 짧은 풀이
    // const count = {};

    // for(let i = 0; i < nums.length; i++){
    //     count[nums[i]] > 0 ? count[nums[i]] +=1 : count[nums[i]] = 1;
    //     if(count[nums[i]] > nums.length/2) return nums[i];
    // }
};

console.log(majorityElement(nums));