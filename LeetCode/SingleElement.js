const nums = [3,3,7,7,10,11,11];

var singleNonDuplicate = function(nums) {
    let compares = {};

    nums.forEach(num => {
        compares[num] = compares[num] ? compares[num] + 1 : 1;
    })

    let answer = Object.entries(compares).find(compare => compare[1] === 1)
    return answer[0];
};

console.log(singleNonDuplicate(nums));