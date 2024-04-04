const Aluno = require('./aluno.js');
const Alunos = require('./alunos');
const Usuarios = require('./usuarios');

module.exports = (app) => {
    Aluno(app)
    Usuarios(app)
}