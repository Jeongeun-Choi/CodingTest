const coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];

var checkStraightLine = function(coordinates) {
    let x = [];
    let y = [];
    let prev = [];
    let curr = [];

    coordinates.map(v => {
        x.push(v[0]);
        y.push(v[1]);
    })
    
    if([...new Set(x)].length === 0 || [...new Set(y)].length === 0) return true;
    
    prev = [x[1] - x[0], y[1] - y[0]];

    for(let i = 2; i < coordinates.length; i++){
        curr = [x[i] - x[i-1], y[i] - y[i-1]];
        if(curr[0]*prev[1] !== curr[1]*prev[0]) return false;
    }
    return true;
};

console.log(checkStraightLine(coordinates));