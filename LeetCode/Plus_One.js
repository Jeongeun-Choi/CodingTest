const digits = [1,2,3];

var plusOne = function(digits) {
    let n = digits.length-1;

    if(digits.length === 1 && digits[0] === 9){
        digits[0] = 0;
        digits.unshift(1);
    } 
    else if(digits[n] === 9){
        for(let i = n; i > 0; i--){
            if(digits[i] === 9 && digits[i-1] !== 9){
                digits[i] = 0;
                digits[i-1] += 1;
                break;
            } else if(digits[i] === 10 || digits[i] === 9 && digits[i-1] === 9){
                digits[i] = 0;
                digits[i-1] += 1;
            }
        }
    } else{
        digits[n] += 1;
    }
    
    if(digits[0] === 10){
        digits[0] = 0;
        digits.unshift(1);
    }

    return digits;
};

console.log(plusOne(digits));