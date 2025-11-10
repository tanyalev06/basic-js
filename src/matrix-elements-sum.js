const { NotImplementedError } = require('../lib');

function getMatrixElementsSum(matrix) {
  let sum = 0;
  const cols = matrix[0].length;
  const rows = matrix.length;

  // Keep track of which columns are "haunted" (contain a 0 above)
  const haunted = new Array(cols).fill(false);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!haunted[j]) {
        if (matrix[i][j] === 0) {
          haunted[j] = true; // all values below will be skipped
        } else {
          sum += matrix[i][j];
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};