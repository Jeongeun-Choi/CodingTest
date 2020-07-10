const arr = [7, 1, 14, 11];

var checkIfExist = function(arr) {
  let check = new Set();

  for (const num of arr) {
    if (check.has(num / 2) || check.has(num * 2)) {
      return true;
    }
    check.add(num);
  }
  return false;
};

console.log(checkIfExist(arr));
