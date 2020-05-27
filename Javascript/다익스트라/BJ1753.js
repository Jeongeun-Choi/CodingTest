const V = 5;
const E = 6;
const K = 1;

const arrs = [
    [5,1,1],
    [1,2,2],
    [1,3,3],
    [2,3,4],
    [2,4,5],
    [3,4,6]
];
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];
// let count = [];
// let V = 0;
// let E = 0;
// let K = 0;
// let arrs = [];
// let answer = [];

// rl.on('line', function (line) {
//     input.push(line);
//     count = input[0].split(' ');
//     V = Number(count[0]);
//     E = Number(count[1]);
//     K = Number(input[1]);
  
// })
//   .on('close', function () {
//     for (let i = 2; i < input.length; i++) {
//         arrs.push(input[i].split(' '));
//     }
//     answer = func(V, E, K, arrs);
    
//     process.exit();
// });

const func = (V, E, K, arrs) =>{
    const pq = new PriorityQueue();

    let edges = Array.from(Array(V + 1), () => new Array());
    let distance = [Infinity];
    
    for(let i = 0; i < V; i++){
        if(i === K-1){
            distance.push(0);
        } else {
            distance.push(Infinity);
        }
    }
    
    arrs.map(arr => {
        let from = arr[0];
        let to = arr[1];
        let edge = arr[2];
    
        edges[from].push({'to': to, 'edge': edge});
    })
    
    pq.push({
        to: K,
        edge: 0
    })

    while(pq.length){
        let current = pq.pop();
        edges[current.to].forEach(next => {
            if(distance[next.to] > distance[current.to] + next.edge){
                distance[next.to] = distance[current.to] + next.edge;
                pq.push(next);
            }
        })
    }

    for(let i = 1; i <= V; i++){
        if(answer[i] === Infinity){
            console.log("INF");
        } else{
            console.log(answer[i]);
        }
    } 
}

class PriorityQueue {
    constructor(){
        this.memory = [];
        this.length = 0;
    }

    push(edge){
        this.length++;

        let isAdded = false;

        for(let i = 0; i < this.memory.length; i++){
            if(this.memory[i].edge > edge.edge){
                this.memory.splice(0, i, edge);
                isAdded = true;
                break;
            }
        }

        if(!isAdded) this.memory.push(edge);
        
    }

    pop(){
        this.length--;
        return this.memory.shift();
    }
}

// console.log(func(V, E, K, arrs));