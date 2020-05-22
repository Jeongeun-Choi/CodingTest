const N = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
const K = 3;

// const dfs = (start, arr, answer, roadSum, N, K) => {
//     answer.push(start)
//     for(let i = 1; i <= N; i++){
//         if(arr[start][i] < Infinity){
//             roadSum += arr[start][i];
//             if(roadSum <= K){
//                 dfs(i, arr, answer, roadSum, N, K);
//             }
//             roadSum -= arr[start][i];
//         }
//     }
    
//     return answer;
// }

// function solution(N, road, K) {
//     let answer = [];
//     let arr = Array(N+1).fill(0).map(() => Array(N+1).fill(Infinity))
//     let roadSum = 0;

//     for(let i = 0; i < road.length; i++){
//         let a = road[i][0];
//         let b = road[i][1];

//         if(arr[a][b] > road[i][2]){
//             arr[a][b] = road[i][2];
//             arr[b][a] = road[i][2];
//         }
//     }
//     let ans = dfs(1, arr, answer, roadSum, N, K);
//     return [... new Set(ans)].length
// }

// function solution(N, road, K) {
//     let checked = Array(N + 1).fill(Infinity);
//     let visit = Array(N + 1).fill(false);
//     let arr = Array(N+1).fill().map(() => Array(N+1).fill(Infinity))
//     let answer = [];

//     for(let i = 0; i < road.length; i++){
//         let a = road[i][0];
//         let b = road[i][1];

//         if(arr[a][b] > road[i][2]){
//             arr[a][b] = road[i][2];
//             arr[b][a] = road[i][2];
//         }
//     }

//     checked[1] = 0;
//     let queue = [1];
//     while(queue.length > 0){
//         let current = queue.shift();
//         visit[current] = true;

//         for(let i = 1; i <= N; i++){
//             if(arr[current][i] < Infinity && !visit[i]){
//                 checked[i] = Math.min(checked[i], checked[current] + arr[current][i]);
//                 queue.push(i);
//             }
//         }
//     }

//     checked.forEach((check, i) => {
//         if(check <= K){
//             answer.push(i)
//         }
//     })

//     return answer.length;
// }

//결국... 코드를 베낀다...
function solution(N, road, K) {
    const pq = new PriorityQueue();
    const adj = Array.from(Array(N + 1), () => new Array());
    const dist = [0, 0];

    for(let i = 0 ; i < N - 1 ; ++i) dist.push(Infinity);

    road.map(info => {
        let a = info[0];
        let b = info[1];
        let c = info[2];
        
        adj[a].push({to: b, weight: c});
        adj[b].push({to: a, weight: c});
    });
    
    pq.push({
        to: 1,
        weight: 0
    });
    
    while(pq.length){
        let edge = pq.pop();
        adj[edge.to].map(next => {
            if(dist[next.to] > dist[edge.to] + next.weight){
                dist[next.to] = dist[edge.to] + next.weight;
                pq.push(next);
            } 
        });
    }
    
        
    let answer = 0;
    for(let i = 1 ; i < N + 1 ; ++i){
        if(dist[i] <= K) answer++;
    }
    
    return answer;
}

class PriorityQueue {
    constructor() {
        this.memory = [];
        this.length = 0;
    }
    
    push(newItem) {
        this.length++;
        
        let isAdded = false;

        for(let i = 0 ; i < this.memory.length ; ++i){
            if(this.memory[i].weight > newItem.weight){
                this.memory.splice(i, 0, newItem);
                isAdded = true;
                break;
            } 
        }        
        
        if(!isAdded) this.memory.push(newItem);
    }
    
    pop() {
        this.length--;
        return this.memory.shift();
    }

}

console.log(solution(N, road, K))