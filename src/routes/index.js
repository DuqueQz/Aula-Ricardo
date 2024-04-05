const Aluno = require('./aluno.js');
const Usuarios = require('./usuarios.js');

module.exports = (app) => {
    Aluno(app)
    Usuarios(app)
}