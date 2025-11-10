const { NotImplementedError } = require('../lib');

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const letters = members
    .filter(member => typeof member === 'string') // keep only strings
    .map(name => name.trim()[0].toUpperCase())   // take first letter uppercase
    .filter(Boolean)                             // remove empty strings
    .sort();                                     // alphabetical order

  return letters.join('');
}

module.exports = {
  createDreamTeam
};