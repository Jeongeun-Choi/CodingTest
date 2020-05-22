function solution(N, road, K) {
    let queue = new PriorityQueue();
    let arr = Array.from(Array(N + 1), () => new Array());
    let distance = [Infinity, 0];

    for(let i = 0; i < N - 1; i++){
        distance.push(Infinity);
    }

    road.map(info => {
        let a = info[0];
        let b = info[1];
        let c = info[2];

        arr[a].push({to : b, weight : c});
        arr[b].push({to : a, weight : c});
    })

    queue.push({
        to : 1,
        weight : 0
    })

    while(queue.length > 0){
        let current = queue.pop();

        arr[current.to].map(next => {
            if(distance[next.to] > distance[current.to] + next.weight){
                distance[next.to] = distance[current.to] + next.weight;
                queue.push(next);
            }
        })
    }

    return distance.filter(dist => dist <= K).length
}

class PriorityQueue{
    constructor(){
        this.memory = [];
        this.length = 0;
    }

    push(element){
        this.length++;

        let isAdded = false;

        for(let i = 0; i < this.memory.length; i++){
            if(this.memory[i].weight > element.weight){
                this.memory.splice(i, 0, element);
                isAdded = true;
                break;
            }
        }

        if(!isAdded) this.memory.push(element);
    }

    pop(){
        this.length--;
        return this.memory.shift();
    }
}