const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

//나의 풀이
function solution(skill, skill_trees) {
    var answer = 0;
    let index = 1;
    let skill_order = {};
    let compare = 1;

    for(const item of skill){
        skill_order[item] = index;
        index++;
    }

    for(let i = 0; i < skill_trees.length; i++){
        answer++;
        for(const item of skill_trees[i]){
            if(Object.keys(skill_order).includes(item)){
                if(skill_order[item] === compare){
                    compare++;
                } else{
                    answer--;
                    break;
                }
            } 
        }
        compare = 1;
    }

    return answer;
}

//오호 더 깔끔한 코드
// function solution(skill, skill_trees) {
//     let answer = 0;

//     for(let i = 0; i < skill_trees.length; i++){
//         let compare = [...skill_trees[i]];

//         compare = compare.filter(v => skill.includes(v)).join('');

//         if(skill.includes(compare) && skill[0] === compare[0]) answer++;

//         if(compare.length === 0) answer++;
//     }

//     return answer;
// }

console.log(solution(skill, skill_trees))