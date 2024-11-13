var asteroidCollision = function (asteroids) {
  let z = [...asteroids];
  let stack = [];
  stack.push(z[0]);

  for (i = 1; i < z.length; i++) {
    if (stack[i - 1] < 0) {
      stack.push(z[i]);
    } else if ((z[i] < 0 && z[i - 1] < 0) || (z[i] > 0 && z[i - 1] > 0)) {
      stack.push(z[i]);
    } else {
      let curr = asteroids[i];
      let ele = asteroids[i - 1];
      stack.pop();
      if (curr + ele != 0) {
        stack.push(Math.abs(curr) > Math.abs(ele) ? curr : ele);
      }
    }
  }
  return stack;
};

console.log(asteroidCollision([10, 2, -5]));
