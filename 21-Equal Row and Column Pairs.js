var equalPairs = function (grid) {
  let count = 0;
  let n = grid.length;

  // Iterate over all rows
  for (let ri = 0; ri < n; ri++) {
    // For each row, iterate over all columns
    for (let cj = 0; cj < n; cj++) {
      let isEqual = true;
      for (let i = 0; i < n; i++) {
        if (grid[ri][i] !== grid[i][cj]) {
          isEqual = false;
          break;
        }
      }
      if (isEqual) {
        count++; // Increment count if row and column are equal
      }
    }
  }

  return count;
};
