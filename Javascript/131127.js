function makeObject(array) {
  const object = array.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});

  return object;
}

function solution(want, number, discount) {
  let answer = 0;
  let startIndex = 0;
  let endIndex = 10;

  const wantObject = want.reduce((acc, cur, index) => {
    acc[cur] = number[index];
    return acc;
  }, {});

  while (endIndex <= discount.length) {
    const canBuyWant = makeObject(want);
    const sliced = discount.slice(startIndex, endIndex);
    sliced.forEach((item) => {
      canBuyWant[item] += 1;
    });

    if (want.every((name) => wantObject[name] === canBuyWant[name])) {
      answer += 1;
    }

    startIndex += 1;
    endIndex += 1;
  }
  return answer;
}

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(want, number, discount));
