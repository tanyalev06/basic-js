const { NotImplementedError } = require('../lib');

function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Directions for all 8 neighbors
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;

      for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;

        if (x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y]) {
          count++;
        }
      }

      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};