function recursion(picks, minerals) {
  let diamond = 0;
  let iron = 0;
  let stone = 0;

  if (minerals.length === 0) {
    return 0;
  }

  if (picks.every((pick) => pick === 0)) {
    return 0;
  }

  if (picks[0] > 0) {
    for (let i = 0; i < 5; i++) {
      if (!minerals[i]) {
        break;
      }
      diamond += 1;
    }
    diamond += recursion([picks[0] - 1, picks[1], picks[2]], minerals.slice(5));
  }

  if (picks[1] > 0) {
    for (let i = 0; i < 5; i++) {
      if (!minerals[i]) {
        break;
      }
      if (minerals[i] === "diamond") {
        iron += 5;
      } else {
        iron += 1;
      }
    }
    iron += recursion([picks[0], picks[1] - 1, picks[2]], minerals.slice(5));
  }

  if (picks[2] > 0) {
    for (let i = 0; i < 5; i++) {
      if (minerals[i] === "iron") {
        stone += 5;
      }

      if (minerals[i] === "diamond") {
        stone += 25;
      }

      if (minerals[i] === "stone") {
        stone += 1;
      }
    }

    stone += recursion([picks[0], picks[1], picks[2] - 1], minerals.slice(5));
  }
  return Math.min(diamond || Infinity, iron || Infinity, stone || Infinity);
}

function solution(picks, minerals) {
  let answer = 0;
  answer = recursion(picks, minerals);
  return answer;
}

const picks = [1, 0, 1];
const minerals = [
  "iron",
  "iron",
  "iron",
  "iron",
  "diamond",
  "diamond",
  "diamond",
];

console.log(solution(picks, minerals));
