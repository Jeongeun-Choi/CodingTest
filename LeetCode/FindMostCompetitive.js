const nums = [71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2];
const k = 3;

var mostCompetitive = function(nums, k) {
  let len = nums.length;
  let answer = [nums[0]];
  let currentIndex = 0;
  let remainer = len - k;

  for (let i = 1; i < len; ) {
    if (!remainer) return answer.concat(nums.slice(i));
    else if (nums[i] < answer[currentIndex]) {
      answer.pop();
      currentIndex--;
      remainer--;
    } else {
      answer.push(nums[i]);
      currentIndex++;
      i++;
    }
  }

  return answer.slice(0, k);
};

console.log(mostCompetitive(nums, k));
