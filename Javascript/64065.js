const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
//{{111, 2}} 경우 다시 생각해보기
function solution(s) {
    var answer = [];
    let arr = s.split('');
    let num = '';
    let count = [];
    let newArr = [];
    // arr.splice(0, 1);
    // arr.splice(arr.length-1, 1);

    //쪼개는것 부터 일
    //내가 쪼갠 거
    // arr.map(v => {
    //     if(v === '{') null;

    //     else if(v === '}'){
    //         count.push(parseInt(num));
    //         newArr.push(count);
    //         count = [];
    //         num = '';
    //     }
    //     else if(v === ','){
    //         if(num){
    //             count.push(parseInt(num));
    //             num = '';
    //         }
    //     }
    //     else {
    //         num = num + v;
    //     }
    // })

    //이런식으로도 할 수 있다.... 똑똑이들 많네
    s.slice(2, s.length-2).split('},{').map(num => {
        newArr.push(num.split(',').map(v => parseInt(v)))
    });
    //배열 길이가 작은 순으로 정렬
    newArr.sort((a,b) => a.length-b.length);
    console.log(newArr);
    //맨 처음 오는게 튜플의 처음 숫자
    answer = [...newArr[0]];
    for(let i = 1; i < newArr.length; i++){
        let minus = 0;
        for(let j = 0; j < newArr[i].length; j++){
            if(!answer.includes(newArr[i][j])){
                minus = newArr[i][j]
            }
        }
        answer.push(minus);
    }
    return answer;
}

console.log(solution(s));