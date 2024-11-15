var predictPartyVictory = function (senate) {
  const a = senate.split("");
  const n = a.length;
  const q1 = [];
  const q2 = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] == "R") {
      q1.push(i);
    } else {
      q2.push(i);
    }
  }

  while (q1.length > 0 && q2.length > 0) {
    if (q1[0] < q2[0]) {
      q2.shift();
      q1.push(q1[0] + n);
      q1.shift();
    } else if (q2[0] < q1[0] && q2.length == 1) {
      q1.shift();
      q2.push(q2[0] + n);
      q2.shift();
    } else if (q1[0] > q2[0]) {
      q1.shift();
      q2.push(q2[0] + n);
      q2.shift();
    }
  }
  return q1.length != 0 ? "Radiant" : "Dire";
};
console.log(predictPartyVictory("DRD")); // Output: 3
