const n = 19;

var isHappy = function(n) {
    let str = String(n);
    let check = new Set([str]);

    while(1){
        let arr = String(str).split('');
        str = 0;

        arr.map(v => {
            let sqr = Math.pow(parseInt(v), 2);
            str += sqr;
        })
        if(str === 1){
            return true;
        }
        if(check.has(String(str))){
            return false;
        } else{   
            check.add(String(str));
        }
    }
};

console.log(isHappy(n));