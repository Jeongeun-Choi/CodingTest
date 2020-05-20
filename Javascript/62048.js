function getGCD(a, b){
    if(a % b === 0) {
        return b
    }
    else{
        return getGCD(b, a % b);
    }
}

function solution(w, h) {
    let area = w * h;
    if(w === h) return area - w;

    let min = Math.min(w, h);
    let max = Math.max(w, h);
    let blockWidth = 0;
    let blockHeight = 0;
    let remainder = 0;

    let gcd = getGCD(max, min);

    blockWidth = parseInt(w / gcd);
    blockHeight = parseInt(h / gcd);

    remainder = (blockHeight + blockWidth - 1) * gcd;

    return area - remainder;
}

//최대공약수 : 유클리드 호제법을 이용하여 풀었다.
//(a>=b 일때) b를 a % b한 나머지값으로 나누었을때 나머지가 0이면 a%b의 값이 최대공약수가 된다.
console.log(solution(8, 12))    