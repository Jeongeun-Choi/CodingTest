const nums = [4,3,2,7,8,2,3,1];

var findDisappearedNumbers = function(nums) {
    let answer = [];
    let arr = new Array(nums.length).fill(0);

    nums.map(num => {
        arr[num-1] += 1;
    })

    arr.map((v, i) => {
        if(v === 0) answer.push(i+1);
    })

    return answer;
};

console.log(findDisappearedNumbers(nums));