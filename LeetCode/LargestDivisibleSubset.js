const nums = [1, 2, 5, 8, 25];

var largestDivisibleSubset = function(nums) {
  if (nums.length < 2) return nums;

  nums.sort((a, b) => a - b);

  let arr = new Array(nums.length);
  arr[arr.length - 1] = [nums[nums.length - 1]];
  let max = [];

  for (let i = arr.length - 2; i >= 0; i--) {
    let c = [nums[i]];

    for (let j = i + 1; j < arr.length; j++) {
      //같은 길이의 집합이 여러개 나오는 경우 중복 예방.
      if (nums[j] % nums[i] === 0 && 1 + arr[j].length > c.length) {
        c = [nums[i]].concat(arr[j]);
      }
    }
    arr[i] = c;
    if (max.length < c.length) {
      max = c;
    }
  }

  return max;
};

console.log(largestDivisibleSubset(nums));
