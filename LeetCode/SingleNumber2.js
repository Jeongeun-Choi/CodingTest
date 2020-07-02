const nums = [0, 1, 0, 1, 0, 1, 99];

var singleNumber = function(nums) {
  const obj = {};
  for (const num of nums) {
    obj[num] ? obj[num]++ : (obj[num] = 1);
  }

  for (const o in obj) {
    if (obj[o] < 3) return o;
  }
};

console.log(singleNumber(nums));
