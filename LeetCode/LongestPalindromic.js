const s = 'cbbd';

const isPalindromic = str => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
};
// sliding window
var longestPalindrome = function(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    let left = 0;
    let right = i;

    while (right < s.length) {
      const spliceStr = s.substring(left, right + 1);

      if (isPalindromic(spliceStr)) return spliceStr;
      left++;
      right++;
    }
  }

  return '';
};

console.log(longestPalindrome(s));
