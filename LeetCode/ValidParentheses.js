const s = '{[]}';

var isValid = function(s) {
  if (s.length === 1) return false;

  const closeBrackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const stack = [];

  for (const element of s) {
    if (Object.keys(closeBrackets).includes(element)) {
      const openBracket = stack.pop();
      if (closeBrackets[element] !== openBracket) return false;
      continue;
    }
    stack.push(element);
  }

  if (stack.length) return false;
  return true;
};

console.log(isValid(s));
