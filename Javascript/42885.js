const people = [20, 30, 40, 50];
const limit = 70;

// js는 숫자 sort시 비교 함수를 만들어서 sort안에 넣어준다....ㅋ....재수없어....
function compareNumbers(a, b) {
    return a - b;
}

function solution(people, limit) {
    let answer = 0;
    let first = 0;
    let second = 0;
    let sum = 0;

    people.sort(compareNumbers);

    while(people.length !== 0){
        if(people.length === 1) return answer += 1;
        first = people[0];
        second = people[people.length-1];
        sum = first + second;

        if(limit < sum){
            answer += 1;
            people.pop();
        } else{
            answer += 1;
            people.pop();
            people.shift();
        }
    }
    return answer;
}

console.log(solution(people, limit));