const { NotImplementedError } = require('../lib');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  _process(text, key, encrypt = true) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (this.alphabet.includes(char)) {
        const textPos = this.alphabet.indexOf(char);
        const keyPos = this.alphabet.indexOf(key[keyIndex % key.length]);
        const shift = encrypt ? (textPos + keyPos) % 26 : (textPos - keyPos + 26) % 26;
        result += this.alphabet[shift];
        keyIndex++;
      } else {
        result += char; // non-alphabetic characters remain unchanged
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }

  decrypt(message, key) {
    return this._process(message, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};