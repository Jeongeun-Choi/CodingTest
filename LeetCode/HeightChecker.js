const heights = [2, 1, 2, 1, 1, 2, 2, 1];

var heightChecker = function(heights) {
  const compareHeights = [];
  heights.forEach(height => {
    compareHeights.push(height);
  });
  const sorted = [];
  let answer = 0;

  const merge = (left, middle, right) => {
    let index = left;
    let otherLeft = middle + 1;

    while (left <= middle && otherLeft <= right) {
      if (compareHeights[left] <= compareHeights[otherLeft]) {
        sorted[index] = compareHeights[left];
        left++;
      } else {
        sorted[index] = compareHeights[otherLeft];
        otherLeft++;
      }
      index++;
    }

    if (left > middle) {
      for (let i = otherLeft; i <= right; i++) {
        sorted[index] = compareHeights[i];
        index++;
      }
    } else {
      for (let i = left; i <= middle; i++) {
        sorted[index] = compareHeights[i];
        index++;
      }
    }

    for (let i = 0; i <= right; i++) {
      compareHeights[i] = sorted[i];
    }
  };

  const mergeSort = (left, right) => {
    if (left < right) {
      let middle = parseInt((left + right) / 2);
      mergeSort(left, middle);
      mergeSort(middle + 1, right);
      merge(left, middle, right);
    }
  };

  mergeSort(0, compareHeights.length - 1);
  console.log(compareHeights, heights);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== compareHeights[i]) {
      answer += 1;
    }
  }
  return answer;
};

console.log(heightChecker(heights));
