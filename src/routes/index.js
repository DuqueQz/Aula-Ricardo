const Aluno = require('./aluno');
const Login = require('./login')
const Usuarios = require('./usuarios');


module.exports = (app) => {
    Aluno(app)
   Login(app)
    Usuarios(app)
}