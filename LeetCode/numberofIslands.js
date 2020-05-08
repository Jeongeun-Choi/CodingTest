//BFS로 풀었다................
const grid = [[1,1,1,1,0], [1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]];

const BFS = function(x, y, dir, grid){
    let q = [[x, y]];

    while(q.length){
        let index = q.pop();
        let a = index[0];
        let b = index[1];
        
        for(let i = 1; i <= 4; i++){
            let dx = a + dir[i][0];
            let dy = b + dir[i][1];

            if(dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[x].length && parseInt(grid[dx][dy]) === 1){
                grid[dx][dy] = '0';
                q.push([dx, dy]);
            }
        }
    }
};

var numIslands = function(grid) {
    let dir = {
        1 : [0, 1], //오른쪽
        2 : [1, 0], //아래
        3 : [0, -1], //왼쪽
        4 : [-1, 0] //위 
    }
    let count = 0 ;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(parseInt(grid[i][j]) === 1){
                grid[i][j] = '0';
                BFS(i, j, dir, grid);
                count++;
            }
        }
    }
    return count;
};

console.log(numIslands(grid));