const { NotImplementedError } = require('../lib');

function deleteDigit(n) {
  const str = n.toString();
  let max = -Infinity;

  for (let i = 0; i < str.length; i++) {
    const newNum = parseInt(str.slice(0, i) + str.slice(i + 1), 10);
    if (newNum > max) {
      max = newNum;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};