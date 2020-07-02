const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  let queue = new Array(bridge_length).fill(0);

  let nowTruck = truck_weights.shift();

  queue[0] = nowTruck;

  answer++;
  let queueSum = nowTruck;

  while (queueSum) {
    queueSum -= queue.pop();
    nowTruck = truck_weights.shift();

    if (nowTruck + queueSum <= weight) {
      queue.unshift(nowTruck);
      queueSum += nowTruck;
    } else {
      queue.unshift(0);
      truck_weights.unshift(nowTruck);
    }
    answer++;
  }

  return answer;
}

console.log(solution(bridge_length, weight, truck_weights));
