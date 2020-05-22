const n = 16; 
const stations = [9];
const w = 2;


function solution(n, stations, w) {
    let answer = 0;
    let start = 0;
    let wave = w * 2 + 1;
    
    for(let i = 0; i < stations.length; i++){
        let left = stations[i] - (w + 1);
        let right = stations[i] + w - 1;

        if(start >= left && start <= right){
            start = right + 1;
            continue;
        }
        let div = parseInt((left - start) / wave)
        let quo = (left - start) % wave;

        if(quo > 0){
            div += 1;
        }
        answer += div;
        start = right + 1;
    }

    if(start < n){
        let div = parseInt((n - start) / wave);
        let quo = (n - start) % wave;

        if(quo > 0){
            div += 1;
        }
        answer += div;
    }
    return answer;
}

console.log(solution(n, stations, w));