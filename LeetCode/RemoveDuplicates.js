const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function(nums) {
  let index = 0;
  nums.forEach(num => {
    if (nums[index] !== num) {
      nums[++index] = num;
    }
  });

  return nums.length && index + 1;
};

console.log(removeDuplicates(nums));

//?????이상한 문제.
