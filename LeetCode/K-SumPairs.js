const nums = [1, 2, 3, 4];
const k = 5;

var maxOperations = function(nums, k) {
  let seen = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const differ = k - nums[i];

    if (!seen.has(differ)) {
      seen.set(nums[i], (seen.get(nums[i]) || 0) + 1);
      continue;
    }
    seen.set(differ, seen.get(differ) - 1);
    if (!seen.get(differ)) seen.delete(differ);
    count++;
  }
  return count;
};
// var maxOperations = function(nums, k) {
//   let left = 0;
//   let right = nums.length - 1;
//   let answer = 0;
//   let sortedNums = nums.sort((a, b) => a - b);

//   while (left < right) {
//     let sum = sortedNums[left] + sortedNums[right];

//     if (sum === k) {
//       answer++;
//       left++;
//       right--;
//       continue;
//     }

//     if (sum < k) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return answer;
// };

console.log(maxOperations(nums, k));
