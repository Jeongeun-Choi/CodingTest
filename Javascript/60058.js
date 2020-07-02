const p = "()))((()";

//짝이 맞는지 확인
const correct = arr => {
  const blanket = {
    "(": ")"
  };
  let stack = [];
  stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let check = stack[stack.length - 1];
    if (blanket[check] === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  //짝이 맞다면 true, 아닐 경우 false
  return stack.length === 0 ? true : false;
};

const balance = arr => {
  let answer = "";
  let first = [];
  let second = [];

  const blanketCheck = ["(", ")"];
  let strArr = [];
  let obj = {};

  if (arr.length === 0) return "";
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
    strArr.push(arr[i]);
    if (obj[blanketCheck[0]] === obj[blanketCheck[1]]) {
      if (first.length === 0) {
        first = [...strArr];
        strArr = [];
      } else {
        second = [...strArr];
      }
    }
  }

  strArr = [];

  //u가 올바른 괄호 문자열일 경우
  if (correct(first)) {
    answer += first.join("");
    answer += balance(second);

    return answer;
  }
  //아닐 경우
  else {
    answer = "(" + balance(second) + ")";

    let newU = [];
    //u의 앞뒤 문자 제거.
    first.splice(0, 1);
    first.splice(first.length - 1, 1);
    for (let i = 0; i < first.length; i++) {
      if (first[i] === "(") {
        newU.push(")");
      } else {
        newU.push("(");
      }
    }
    answer = answer + newU.join("");
    return answer;
  }
};

function solution(p) {
  let arr = p.split("");

  if (correct(arr)) return p;

  return balance(arr);
}

console.log(solution(p));
