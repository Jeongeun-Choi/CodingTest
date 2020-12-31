const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = [];
let count = 0;
let answer = 0;
let N = 0;
let M = 0;

rl.on('line', function(line) {
  if (count > 0) {
    arr.push(Number(line));
    count++;
    if (count - 1 === Number(N)) {
      answer = getAnswer(arr);
      rl.close();
    }
  } else {
    const splitString = line.split(' ');
    N = Number(splitString[0]);
    M = Number(splitString[1]);
    count++;
  }
}).on('close', function() {
  console.log(answer);
  process.exit();
});

const getAnswer = Immigrations => {
  let maxTime = Math.max(...Immigrations) * M;
  let minTime = 0;
  let countPerson = 0;
  let correct = maxTime;

  while (maxTime >= minTime) {
    let mid = Math.floor((maxTime + minTime) / 2);
    countPerson = 0;
    for (const Immigration of Immigrations) {
      countPerson += Math.floor(mid / Immigration);
    }

    if (countPerson >= M) {
      correct = Math.min(correct, mid);
      maxTime = mid - 1;
    } else {
      minTime = mid + 1;
    }
  }
  return correct;
};
