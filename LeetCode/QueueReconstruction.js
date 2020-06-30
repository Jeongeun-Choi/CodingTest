const people = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2]
];
var reconstructQueue = function(people) {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  console.log(people);
  let queue = [];

  for (const p of people) {
    queue.splice(p[1], 0, p);
  }

  return queue;
};
//[h, k]
//h = 높이
//k = 앞에 나보다 크거나 같은 키를 가진 사람의 수

console.log(reconstructQueue(people));
