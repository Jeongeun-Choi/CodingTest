const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
  let name = {};

  for (const part of participant) {
    name[part] ? (name[part] += 1) : (name[part] = 1);
  }

  for (const com of completion) {
    if (name[com] > 0) {
      name[com]--;
    }
  }

  for (const n in name) {
    if (name[n] > 0) return n;
  }
}

console.log(solution(participant, completion));
