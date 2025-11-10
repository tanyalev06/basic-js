const { NotImplementedError } = require('../lib');

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }

    const current = arr[i];

    switch (current) {
      case '--discard-next':
        if (i + 1 < arr.length) skipNext = true;
        break;

      case '--discard-prev':
        if (result.length && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;

      case '--double-next':
        if (i + 1 < arr.length) result.push(arr[i + 1]);
        break;

      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(current);
    }
  }

  return result;
}

module.exports = {
  transform
};