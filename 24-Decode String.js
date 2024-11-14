var decodeString = function (s) {
  let stack = [];
  let currentString = "";
  let currentNumber = 0;
  let a = s.split("");

  for (i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) {
      currentNumber = currentNumber * 10 + Number(a[i]);
    } else if (a[i] === "[") {
      stack.push(currentNumber);
      stack.push(currentString);
      currentNumber = 0;
      currentString = "";
    } else if (/^[a-zA-Z]$/.test(a[i])) {
      currentString += a[i];
    } else if (a[i] == "]") {
      let prevEle = stack.pop();
      let prevNum = stack.pop();
      currentString = prevEle + currentString.repeat(prevNum);
    }
  }
  return currentString;
};

console.log(decodeString("2[abc]3[cd]ef"));
