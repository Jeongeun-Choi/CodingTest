/**
 * @param {string} digits
 * @return {string[]}
 */
const phone = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  let phoneArray = [];

  for (const digit of digits) {
    phoneArray.push(phone[digit]);
  }

  if (!phoneArray.length) {
    return phoneArray;
  }

  for (let i = 0; i < phoneArray.length - 1; i += 1) {
    const newPhoneArray = [];
    for (const first of phoneArray[i]) {
      for (const second of phoneArray[i + 1]) {
        newPhoneArray.push(first + second);
      }
    }
    phoneArray[i + 1] = newPhoneArray;
  }

  return phoneArray.at(-1);
};

console.log(letterCombinations("23"));
