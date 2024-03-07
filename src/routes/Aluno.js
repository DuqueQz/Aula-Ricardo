const alunoController = require('../controllers/Aluno');

module.exports = (app) => {
    app.get('/aluno', alunoController.getAluno)
    app.post('/aluno', alunoController.postAluno)
}