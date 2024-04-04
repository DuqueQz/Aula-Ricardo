const crypto = require('crypto');

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
}
const user = 'MATHEUS.TOGNI'
const password = 'password'

const storedPassword = 'c72bd0fd73b3411a336d58ce78de7f8f0bdb62a9c328e45de4122702a9d37b25e099c0898d08fdd92c265e8cdfe0e0beb5d812eab6e001a466735af981c6949c'
const salt = '35447881b52a6cfb395bc260ffb1e63a'

function comparePassword(storedPassword, salt, providedPassword) {
    const hash = hashPassword(providedPassword, salt)
    return hash === storedPassword
}

console.log(comparePassword(storedPassword, salt, password))

const hashedPassword = hashPassword(password, salt)
//console.log(salt);
//console.log(hashedPassword)

function criarUsuario (usuario, senha) {
    const salt = generateSalt()
    const hashedPassword = hashPassword(senha, salt)
    //chama banco para salvar {usuario, salt e hashedPassword}
}




// salt: b5f3424d319f7314bd27bfdbaf74d6e9