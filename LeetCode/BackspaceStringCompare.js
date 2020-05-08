const S = "a##c";
const T = "#a#c";

var backspaceCompare = function(S, T) {
    let stacks = [];
    let stackt = [];

    for(const s of S){
        if(s === '#'){
            stacks.pop();
        } else{
            stacks.push(s);
        }
    }
    
    for(const t of T){
        if(t === '#'){
            stackt.pop();
        } else{
            stackt.push(t);
        }
    }

    return stacks.join('') === stackt.join('') ? true : false;
    
};

console.log(backspaceCompare(S, T));