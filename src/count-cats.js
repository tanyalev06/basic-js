const { NotImplementedError } = require('../lib');

function countCats(matrix) {
  let count = 0;

  for (const row of matrix) {
    for (const cell of row) {
      if (cell === '^^') {
        count++;
      }
    }
  }

  return count;
}

module.exports = {
  countCats
};