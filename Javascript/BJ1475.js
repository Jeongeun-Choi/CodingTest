const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer = 0;

rl.on('line', function(line) {
  answer = getSet(line);
  rl.close();
}).on('close', function() {
  console.log(answer);
  process.exit();
});

const getSet = setItems => {
  const numberObj = String(setItems)
    .split('')
    .reduce((acc, item) => {
      acc[item] ? (acc[item] += 1) : (acc[item] = 1);

      return acc;
    }, {});

  let maxValue = 0;

  for (const [key, value] of Object.entries(numberObj)) {
    if (maxValue < value && key !== '9' && key !== '6') {
      maxValue = value;
    }
  }

  let answer = 0;
  if (numberObj['9']) {
    answer += numberObj['9'];
  }

  if (numberObj['6']) {
    answer += numberObj['6'];
  }

  return Math.max(Math.round(answer / 2), maxValue);
};
