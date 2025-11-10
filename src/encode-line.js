const { NotImplementedError } = require('../lib');

function encodeLine(str) {
  if (!str) return '';

  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};