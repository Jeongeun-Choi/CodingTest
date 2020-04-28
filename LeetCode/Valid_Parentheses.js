const s = "(])";

const brackets = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
}

var isValid = function(s) {
    let arr = [];
    let front = Object.keys(brackets);
    let string = s.split('');

    if(s.length === 1){
        return false;
    }

    string.map(v => {
        if(front.includes(v)){
            arr.push(v);
        } else{
            if(brackets[arr[arr.length - 1]] !== v){
                arr.push(v);
            } else{
                arr.pop();
            }
        }
    })

    return arr.length === 0 ? true : false;
};

console.log(isValid(s));