const s = "dvdf";

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let current = '';

    for(let i = 0; i < s.length; i++){
        //substring => substring(1, 3) 이면 1~3까지 출력, substring(0), substring(-1)은 문자열 그대로 출력
        current = current.substring(current.indexOf(s[i]) + 1); //미친 신세계;;;
        current += s[i];

        if(current.length > max){
            max = current.length;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring(s));