const n = 3;

const getBase = n => {
  let base = '';
  let quotient = Math.floor(n / 3);
  let remainder = n % 3;
  base = String(remainder) + base;

  while (quotient >= 3) {
    let basic = quotient;
    quotient = Math.floor(basic / 3);
    remainder = basic % 3;

    base = String(remainder) + base;
  }

  base = String(quotient) + base;
  return base;
};

const solution = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let base = getBase(n);

  const answer = base.split('').reduce((acc, num, index) => {
    return (acc += Number(num) * Math.pow(3, index));
  }, 0);

  return answer;
};

console.log(solution(n));
