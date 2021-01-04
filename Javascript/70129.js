const s = '110010101001';

const removeZeros = s => {
  let newString = '';
  let count = 0;
  for (const element of s) {
    if (element === '0') {
      count++;
      continue;
    }
    newString += element;
  }

  return [newString, count];
};

const solution = s => {
  let string = s;
  let removingZerocount = 0;
  let changeCount = 0;

  while (string !== '1') {
    let [newString, newCount] = removeZeros(string);

    let newStringLen = newString.length;
    string = newStringLen.toString(2);
    removingZerocount += newCount;
    changeCount += 1;
  }

  return [changeCount, removingZerocount];
};

console.log(solution(s));
