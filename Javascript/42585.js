//스택 이용
const arrangement = "()(((()())(())()))(())"

function solution(arrangement) {
    const rearragement = arrangement.split('()').join('L');
    let bar = 0;      //막대 수 
    let totalbar = 0; //잘린 막대 수 

    rearragement.split('').map((v, i)=> {
        if(v === '(') {
            bar += 1;
        }
        else if(v === ')'){
            totalbar += 1;
            bar -= 1;
        }
        else{
            totalbar += bar;
        }
    })
    
    return totalbar;
}

console.log(solution(arrangement));