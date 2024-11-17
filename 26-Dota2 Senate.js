var predictPartyVictory = function (senate) {
  const a = senate.split("");
  const n = a.length;
  const q1 = [];
  const q2 = [];

  // Fill the queues with initial indices
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "R") {
      q1.push(i);
    } else {
      q2.push(i);
    }
  }

  // Simulate the rounds
  while (q1.length > 0 && q2.length > 0) {
    let rIndex = q1.shift(); // Corrected from pop() to shift()
    let dIndex = q2.shift(); // Corrected from pop() to shift()

    // The senator with the smaller index bans the other
    if (rIndex < dIndex) {
      q1.push(rIndex + n);
    } else {
      q2.push(dIndex + n);
    }
  }

  // Determine the winner
  return q1.length > 0 ? "Radiant" : "Dire";
};
console.log(predictPartyVictory("DRD")); // Output: 3
