const { NotImplementedError } = require('../lib');

function getEmailDomain(email) {
  // Split by '@' and return the last part
  return email.split('@').pop();
}

module.exports = {
  getEmailDomain
};