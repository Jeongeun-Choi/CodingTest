const s = "abab";
const p = "ab";

var findAnagrams = function(s, p) {
    let check = {};
    let compare = {};
    let firstIndex = 0;
    let answer = [];
    let now = 0;

    for(let v of p) {
        check[v] = check[v] ? check[v] + 1 : 1;
    }

    s.split('').map((v, i) => {
        now +=1;
        compare[v] = compare[v] ? compare[v] + 1 : 1;
        if (now === p.length) {
            if(checkObject(compare, check)) {
                answer.push(firstIndex);
            }
            if(compare[s[firstIndex]] && compare[s[firstIndex]] > 1) {
                compare[s[firstIndex]] -= 1;
            } 
            else {
                delete compare[s[firstIndex]];
            }
            firstIndex += 1;
            now -=1;
        }
    })

    return answer;
};

function checkObject(obj1, obj2) {
    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(findAnagrams(s, p));