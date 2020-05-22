const N = 3;
const trust =[[1,2],[2,3]];

var findJudge = function(N, trust) {
    let compare = {};
    let judge;
    let checked = true;

    for(let i = 1; i <= N; i++){
        compare[i] = [];
    }

    trust.forEach(item => {
        compare[item[0]].push(item[1]);
    })

    Object.keys(compare).forEach(item =>{
        if(compare[item].length === 0) {
            judge = item;
        };
    })

    Object.keys(compare).forEach(key => {
        if(key !== judge){
            if(!compare[key].includes(Number(judge))){
                checked = false;
            }
        }
    })

    return checked ? judge : -1;
};

console.log(findJudge(N, trust));