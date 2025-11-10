const { NotImplementedError } = require('../lib');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    if (arr.length === 0) return 1;

    let maxDepth = 0;
    for (const item of arr) {
      const depth = this.calculateDepth(item);
      if (depth > maxDepth) maxDepth = depth;
    }

    return maxDepth + 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};