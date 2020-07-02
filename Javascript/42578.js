const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"]
];
function solution(clothes) {
  let answer = 1;
  let obj = {};

  for (const cloth of clothes) {
    let [name, sort] = cloth;

    obj[sort] ? obj[sort].push(name) : (obj[sort] = [name]);
  }

  for (const o in obj) {
    answer *= obj[o].length + 1;
  }

  return answer - 1;
}

console.log(solution(clothes));
