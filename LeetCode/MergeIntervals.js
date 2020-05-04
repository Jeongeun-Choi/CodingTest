const intervals = [[1,3],[2,6],[8,10],[15,18]];

// 세상엔 똑똑한 사람들이 많다
var merge = function(intervals){
    
    intervals.sort((a,b) => a[0]===b[0] ? a[1] - b[1] : a[0]-b[0]);
    
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] > intervals[i-1][1]) continue;

        else if(intervals[i][1] <= intervals[i-1][1]) intervals.splice(i--, 1);
        else{
            let mergeArr = [intervals[i-1][0], intervals[i][1]];
            intervals.splice(i-1, 2, mergeArr);
            i--;
        }
    }
    return intervals;
};

// 내가 푼 코드 ^^ 완전 개판^^
// var merge = function(intervals) {
//     let index = 0;
//     let first = 0;
//     let second = 0;

//     intervals.sort((a,b) => a[0]-b[0]);

//     while(index < intervals.length - 1){
//         if(intervals[index+1][0] >= intervals[index][0] && intervals[index+1][0] <= intervals[index][1] && intervals[index+1][1] >= intervals[index][0] && intervals[index+1][1] <= intervals[index][1]){
//             intervals.splice(index+1, 1);
//         } else if(intervals[index+1][0] >= intervals[index][0] && intervals[index+1][0] <= intervals[index][1]){
//             first = intervals[index][0];
//             second = intervals[index+1][1];
//             intervals.splice(index+1, 1, [first, second]);
//             intervals.splice(index, 1);
//         } else if(intervals[index+1][1] >= intervals[index][0] && intervals[index+1][1] <= intervals[index][1]){
//             first = intervals[index+1][0];
//             second = intervals[index][1];
//             intervals.splice(index+1, 1, [first, second]);
//             intervals.splice(index, 1);
//         } else if(intervals[index+1][0] < intervals[index][0] && intervals[index+1][1] > intervals[index][1]){
//             first = intervals[index+1][0];
//             second = intervals[index+1][1];
//             intervals.splice(index+1, 1, [first, second]);
//             intervals.splice(index, 1);
//         } 
//         else{
//             index++;
//         }
//     }
//     return intervals;
// };

console.log(merge(intervals));