const { NotImplementedError } = require('../lib');

const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    this._chain.push(String(value));
    return this; // allow chaining
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this._chain.length
    ) {
      this._chain = []; // reset chain on error
      throw new Error("You can't remove incorrect link!");
    }

    this._chain.splice(position - 1, 1); // remove the link
    return this; // allow chaining
  },

  reverseChain() {
    this._chain.reverse();
    return this; // allow chaining
  },

  finishChain() {
    const result = this._chain.map(link => `( ${link} )`).join('~~');
    this._chain = []; // reset chain after finishing
    return result;
  },
};

module.exports = {
  chainMaker,
};