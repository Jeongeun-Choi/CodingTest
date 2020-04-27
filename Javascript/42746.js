const numbers = [6, 10, 2];


function solution(numbers) {
    let answer = '';
    
    answer = numbers.map(v => v + '').sort((a,b) => (b+a) - (a+b)).join('');

    return answer[0] === '0' ? '0' : answer;
}

console.log(solution(numbers));