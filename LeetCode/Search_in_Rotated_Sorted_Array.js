const nums = [4,5,6,7,0,1,2];
const target = 0;

//간단하지만 시간 복잡도가 O(n)
var search = function(nums, target) {
    let index = nums.indexOf(target);

    return index;
};

//시간 복잡도가 O(log n)으로 하려면 이분 탐색으로 하면 된다고 하네용

console.log(search(nums, target));