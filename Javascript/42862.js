const n = 5;
const lost = [2, 4];
const reserve = [3, 5];

function solution(n, lost, reserve) {
  var answer = 0;
  answer = n - lost.length;

  for (const r of reserve) {
    let reserveIndex = reserve.indexOf(r);
    let lostIndex = lost.indexOf(r);

    if (lostIndex >= 0) {
      lost.splice(lostIndex, 1, 0);
      reserve.splice(reserveIndex, 1, 0);
      answer++;
    }
  }

  let newLost = lost.filter(l => l !== 0);
  let newReserve = reserve.filter(r => r !== 0);

  newLost.sort((a, b) => a - b);
  newReserve.sort((a, b) => a - b);
  for (const r of newReserve) {
    for (const l of newLost) {
      if (l >= r - 1 && l <= r + 1) {
        answer++;

        let lostIndex = newLost.indexOf(l);
        newLost.splice(lostIndex, 1);
      }
    }
  }
  return answer;
}

console.log(solution(n, lost, reserve));
