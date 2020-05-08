const stones = [2,7,4,1,8,1];

var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b) => b - a);

        if(stones[0] === stones[1]){
            stones.splice(0, 2);
        } else{
            stones.splice(0, 2, stones[0] - stones[1]);
        }
    }

    return stones.length === 0 ? 0 : stones.pop();
};

console.log(lastStoneWeight(stones));