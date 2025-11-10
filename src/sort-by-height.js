const { NotImplementedError } = require('../lib');

function sortByHeight(arr) {
  // Extract all numbers except -1 and sort them
  const heights = arr.filter(n => n !== -1).sort((a, b) => a - b);

  // Reinsert sorted numbers, keeping -1 in original positions
  return arr.map(n => (n === -1 ? -1 : heights.shift()));
}

module.exports = {
  sortByHeight
};