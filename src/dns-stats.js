const { NotImplementedError } = require('../lib');

function getDNSStats(domains) {
  const stats = {};

  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let dns = '';

    for (const part of parts) {
      dns += `.${part}`;
      stats[dns] = (stats[dns] || 0) + 1;
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};