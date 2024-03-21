const crypto = require('crypto');

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

const salt = generateSalt();


// salt: b5f3424d319f7314bd27bfdbaf74d6e9