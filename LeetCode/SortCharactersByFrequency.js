var frequencySort = function(s) {
    let obj = {};
    let str = '';

    s.split('').forEach(v => {
        obj[v] = obj[v] ? obj[v] + 1 : 1;
    })
    
    let arrs = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    arrs.forEach(arr => {
        for(let i = 1; i <= arr[1]; i++){
            str += arr[0];
        }
    })

    return str
};

console.log(frequencySort("Aabb"))