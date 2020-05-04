const nums = [1,1,1,0];

// 개판인 내 코드^^
// var canJump = function(nums) {
//     let index = 0;
//     let indexArr = [index];

//     if(nums.length === 1){
//         return true;
//     }

//     if(!nums.includes(0)){
//         return true;
//     }

//     while(nums[0] !== 0){
//         index = indexArr[indexArr.length - 1];
//         if(index > nums.length - 1 || nums[index] + index >= nums.length - 1) return true;
//         let jump = nums[index];
//         if(nums[index + jump] === 0){
//             nums[index] -= 1;
//             if(nums[index] === 0){
//                 indexArr.pop();
//             } 
//         } else {
//             index = index + jump;
//             indexArr.push(index);
//         }
//     }
//     return false;
// };

//다른 사람들이 푼 코드 참 나와 다르다^^ 이렇게...생각 할 수 있구나...........
var canJump = function(nums) {
    let max = 0;

    for(let i = 0; i < nums.length; i++){
        if(i > max) return false;

        if(i + nums[i] >= nums.length - 1) return true;

        max = Math.max(max, i + nums[i]);
    }
};
console.log(canJump(nums));