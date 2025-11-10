const { NotImplementedError } = require('../lib');

function getCommonCharacterCount(s1, s2) {
  const countChars = (str) => {
    const count = {};
    for (const char of str) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  };

  const count1 = countChars(s1);
  const count2 = countChars(s2);

  let commonCount = 0;
  for (const char in count1) {
    if (count2[char]) {
      commonCount += Math.min(count1[char], count2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};