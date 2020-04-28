const nums = [4,2,1,2,1];

var singleNumber = function(nums) {

    //이렇게도 푼다~ 나는 참 어렵게 푼다....;;;
    // const arr = [];

    // nums.map(num => {
    //     if(arr.includes(num)){
    //         let index = arr.findIndex(i => i === num);
    //         arr.splice(index, 1);
    //     } 
    //     else arr.push(num);
    // })
    // return arr[0];

    //내가 처음 푼 코드
    const obj = {};
    let answer = 0;
    nums.map(num => {
        obj[num] === 1 ? obj[num] += 1 : obj[num] = 1;
    })

    Object.keys(obj).map(key => {
        if(obj[key] === 1) answer = key;
    })

    return answer;
};

console.log(singleNumber(nums));
