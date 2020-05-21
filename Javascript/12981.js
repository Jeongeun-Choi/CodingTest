const n = 3;
const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

function solution(n, words) {
    var answer = [0, 0];
    let arrs = [words[0]];

    for(let i = 1; i < words.length; i++){
        //문자열 추출시 substring쓰세용
        if(words[i-1][words[i-1].length-1] !== words[i][0]){
            return answer = [(i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)]
        }
        if(arrs.find(arr => arr === words[i])){
            return answer = [(i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)]
        }
        arrs.push(words[i]);
    }

    return answer;
}

console.log(solution(n, words));