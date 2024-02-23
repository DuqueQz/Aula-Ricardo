const alunoController = require('../controllers/Aluno');

module.exports = (app) => {
    app.get('/aluno/:name', alunoController.getAluno)
    
}