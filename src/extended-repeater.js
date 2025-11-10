const { NotImplementedError } = require('../lib');

function repeater(str, options) {
  str = String(str); // ensure str is a string

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  // Build the addition part
  const fullAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  // Build the full string with addition
  const fullStr = str + fullAddition;

  // Repeat the full string with separator
  return Array(repeatTimes).fill(fullStr).join(separator);
}

module.exports = {
  repeater
};