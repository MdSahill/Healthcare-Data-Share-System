const crypto = require('crypto');

module.exports = {
  encrypt(text, key) {
    // very simple (not production-safe) symmetric encryption example
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  },
  decrypt(encryptedHex, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let dec = decipher.update(encryptedHex, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  }
};
