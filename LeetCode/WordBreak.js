// const s = "catsandog";
// const wordDict = ["cats", "dog", "sand", "and", "cat"];
const s = "cars";
const wordDict = ["car", "ca", "rs"];

var wordBreak = function(s, wordDict) {
    if(wordDict.length === 0) return false;

    // for(let i = 0; i < wordDict.length; i++){
    //     if(String(s.split(wordDict[i])) === s){
    //         return false;
    //     }
    //     s = s.split(wordDict[i]).join('');
    // }
    for(let i = 0; i < wordDict.length; i++){
        if(s.includes(wordDict[i])){
            s = s.split(wordDict[i]).join('');
        }
        if(s.length === 0) return true;
    }
    return false;
};

console.log(wordBreak(s, wordDict));