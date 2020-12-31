const n = 6;
const times = [7, 10];

function solution(n, times) {
  let maxTime = Math.max(...times) * n;
  let minTime = 0;
  let countPerson = 0;
  let answer = maxTime;

  while (maxTime >= minTime) {
    let mid = Math.floor((maxTime + minTime) / 2);
    countPerson = 0;

    for (const time of times) {
      countPerson += Math.floor(mid / time);
    }

    if (countPerson >= n) {
      answer = Math.min(answer, mid);
      maxTime = mid - 1;
    } else {
      minTime = mid + 1;
    }
  }
  return answer;
}

console.log(solution(n, times));
