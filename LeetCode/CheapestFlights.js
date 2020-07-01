const n = 3;
const flights = [
  [0, 1, 100],
  [1, 2, 100],
  [0, 2, 500]
];
const src = 0; //출발 정점
const dst = 2; //도착 정점
const K = 0; //들러야할 정점개수

var findCheapestPrice = function(n, flights, src, dst, K) {
  let objs = {};

  for (const flight of flights) {
    let [from, to, price] = flight;
    if (objs[from] == null) objs[from] = {};
    objs[from][to] = price;
  }

  //[price, stop, location] price : 현재 정점의 가격 , stop : 몇 번 들렸는지, location : 현재 정점
  let pq = [[0, 0, src]];

  while (pq.length !== 0) {
    let [price, stop, from] = pq.shift();

    if (stop > K + 1) continue;
    if (from == dst) return price;
    let to = objs[from];
    for (const t in to) {
      let costToNext = price + to[t];
      pq.push([costToNext, stop + 1, t]);
    }
    pq.sort((a, b) => a[0] - b[0]);
    //우선순위 큐는 맨앞에 price 넣고 오름차순으로 정렬한다......
  }

  return -1;
};

console.log(findCheapestPrice(n, flights, src, dst, K));
