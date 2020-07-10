const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];

var threeSum = function(nums) {
  if (nums.length < 3) return [];
  const sortNums = nums;
  sortNums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < sortNums.length - 2; i++) {
    if (sortNums[i] > 0) return answer;
    if (i > 0 && sortNums[i] == sortNums[i - 1]) continue;

    start = i + 1;
    end = sortNums.length - 1;

    while (start < end) {
      mix = sortNums[i] + sortNums[start] + sortNums[end];

      if (mix > 0) {
        end--;
      } else if (mix < 0) {
        start++;
      } else {
        answer.push([sortNums[i], sortNums[start], sortNums[end]]);
        start++;
        end--;
        while (start < end && sortNums[start] == sortNums[start - 1]) start++;
        while (start < end && sortNums[end] == sortNums[end + 1]) end--;
      }
    }
  }
  return answer;
};

console.log(threeSum(nums));
