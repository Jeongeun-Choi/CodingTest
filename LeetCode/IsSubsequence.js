const str = "axc";
const test = "ahbgdc";

var isSubsequence = function(str, test) {
  let i = 0;
  for (let j = 0; i < str.length && j < test.length; j++) {
    if (str[i] === test[j]) {
      i++;
    }
  }

  return i === str.length;
};

console.log(isSubsequence(str, test));
