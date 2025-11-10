const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  const activity = parseFloat(sampleActivity);
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) return false;

  const k = Math.LN2 / HALF_LIFE_PERIOD; // ln(2) / half-life
  const age = Math.log(MODERN_ACTIVITY / activity) / k;

  return Math.ceil(age); // round up to nearest year
}

module.exports = {
  dateSample
};