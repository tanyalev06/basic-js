const { NotImplementedError } = require('../lib');

function isMAC48Address(n) {
  // Regular expression for MAC-48: XX-XX-XX-XX-XX-XX
  const macRegex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  return macRegex.test(n);
}

module.exports = {
  isMAC48Address
};