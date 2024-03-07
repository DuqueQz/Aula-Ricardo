const alunoService = require('../services/Aluno')

const getAluno = async(req, res, next) => {
    try{
        const retorno = await alunoService.getAluno()
        res.status(201).send(retorno)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

const postAluno = async(req, res, next) => {
    try {
        const retorno = await alunoService.postAluno(req.body);
        res.status(201).send(retorno);
    } catch(err) {
        res.status(500).send(err.message);
    }
}
module.exports.getAluno = getAluno
module.exports.postAluno = postAluno