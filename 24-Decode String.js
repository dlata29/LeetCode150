var decodeString = function (s) {
  let stack = [];
  let currentString = "";
  let currentNumber = 0;

  for (let char of s) {
    if (!isNaN(char)) {
      // Build the number
      currentNumber = currentNumber * 10 + parseInt(char);
    } else if (char === "[") {
      // Push the current state to the stack
      stack.push([currentString, currentNumber]);
      // Reset current values
      currentString = "";
      currentNumber = 0;
    } else if (char === "]") {
      // Pop from the stack
      let [previousString, multiplier] = stack.pop();
      // Repeat the current string and concatenate
      currentString = previousString + currentString.repeat(multiplier);
    } else {
      // Add characters to the current string
      currentString += char;
    }
  }

  return currentString;
};
