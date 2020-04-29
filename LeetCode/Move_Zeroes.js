const nums = [0,1,0,3,12];

var moveZeroes = function(nums) {
    let i = 0;
    let count = nums.length-1;

    while(count){
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
        } else{
            i++;
        }
        count--;
    }
    // let len = nums.length;
    // let zeros = 0;

    // nums = nums.filter(num => num !== 0);

    // zeros = len - nums.length;
    
    // while(zeros !== 0){
    //     nums.push(0);
    //     zeros--;
    // }
    return nums;
};

console.log(moveZeroes(nums));