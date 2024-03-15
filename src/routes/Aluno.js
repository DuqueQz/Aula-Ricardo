const alunoController = require('../controllers/aluno');

module.exports = (app) =>{
    app.get('/aluno', alunoController.getAluno
    // #swagger.tags = ["aluno"]
    // #swagger.summary = 'Consulta a lista de alunos'
    // #swagger.description = 'Consulta lista de alunos cadastrados' 
    )
    app.post('/aluno', alunoController.postAluno
    // #swagger.tags = ["aluno"]
    )
    app.delete('/aluno/:id', alunoController.deleteAluno
    // #swagger.tags = ["aluno"]
    )
    app.put('/aluno/:id', alunoController.putAluno
    // #swagger.tags = ["aluno"]
    )
    app.patch('/aluno/:id', alunoController.patchAluno
    // #swagger.tags = ["aluno"]
    )
}