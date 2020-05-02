const height = [1,8,6,2,5,4,8,3,7];

// 내가 푼 코드
var maxArea = function(height) {
    let max = 0;

    for(let i = 0; i < height.length - 1; i++){
        for(let j = i + 1; j < height.length; j++){
            let column = Math.min(height[i], height[j]);
            let width = j - i;
            max = max < column * width ? column * width : max;
        }
    }
    return max;
};

//이걸 뭘로 풀었다고해야지..? 프로그래머스 구명보트를 이렇게 풀었다
// var maxArea = function(height) {
//     let max = 0;
//     let start = 0;
//     let finish = height.length-1;

//     while(start < finish) {
//         let leftHeight = height[start];
//         let rightHeight = height[finish];
//         let width = finish - start;

//         max = Math.max(max, width * Math.min(leftHeight, rightHeight));
//         leftHeight < rightHeight ? start++ : finish--;
//     }
//     return max;
// };

console.log(maxArea(height));