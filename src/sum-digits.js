const { NotImplementedError } = require('../lib');

function getSumOfDigits(n) {
  if (n < 10) return n; // already a single-digit

  const sum = n
    .toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);

  return getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits
};