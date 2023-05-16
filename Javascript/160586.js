function setMinKeyCount(keymaps) {
  const minKeymap = {};

  keymaps.forEach((keymap) => {
    let index = 1;
    for (const char of keymap) {
      if (!minKeymap[char] || minKeymap[char] > index) {
        minKeymap[char] = index;
      }
      index += 1;
    }
  });

  return minKeymap;
}

function solution(keymap, targets) {
  let answer = [];
  const minKeymap = setMinKeyCount(keymap);

  for (const target of targets) {
    let count = 0;
    for (const char of target) {
      count += minKeymap[char];
    }

    if (isNaN(count)) {
      count = -1;
    }
    answer.push(count);
  }
  return answer;
}

console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));
