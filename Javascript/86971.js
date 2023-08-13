function makeTree(wires) {
  const tree = {};

  for (const wire of wires) {
    const [v1, v2] = wire;

    tree[v1] = tree[v1] ? [...tree[v1], v2] : [v2];
    tree[v2] = tree[v2] ? [...tree[v2], v1] : [v1];
  }

  return tree;
}

function findConnectionLen(n, tree, v1, v2) {
  const isChecked = Array.from({ length: n }).fill(false);
  const connectionLine = tree[v1].filter((node) => node !== v2);

  const queue = [...connectionLine];
  let count = queue.length;
  isChecked[v1] = true;
  while (queue.length) {
    const vertex = queue.shift();

    isChecked[vertex] = true;

    for (let i = 0; i < tree[vertex].length; i++) {
      const node = tree[vertex][i];
      if (!isChecked[node]) {
        queue.push(node);
        isChecked[node] = false;
        count += 1;
      }
    }
  }

  return count + 1;
}

function solution(n, wires) {
  let answer = Infinity;
  const tree = makeTree(wires);

  for (let i = 0; i < wires.length; i++) {
    const [v1, v2] = wires[i];
    const connectionCount = findConnectionLen(n, tree, v1, v2);
    answer = Math.min(
      answer,
      Math.abs(connectionCount - (n - connectionCount))
    );
  }
  return answer;
}

const n = 9;
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

console.log(solution(n, wires));
