const { NotImplementedError } = require('../lib');

function renameFiles(names) {
  const used = {};
  const result = [];

  for (const name of names) {
    if (!used[name]) {
      // Name not used yet
      result.push(name);
      used[name] = 1;
    } else {
      // Name already exists, find the smallest k
      let k = used[name];
      let newName = `${name}(${k})`;
      while (used[newName]) {
        k++;
        newName = `${name}(${k})`;
      }
      result.push(newName);
      used[name] = k + 1; // next suffix to try
      used[newName] = 1;  // mark the new name as used
    }
  }

  return result;
}

module.exports = {
  renameFiles
};