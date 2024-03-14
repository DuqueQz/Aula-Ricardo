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

const deleteAluno = async (req, res, next) => {
    try {
        await alunoService.deleteAluno(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const putAluno = async(req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await alunoService.putAluno(params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}   

    const patchAluno = async(req, res, next) => {
        try {
            let params = req.body
            params.id = req.params.id
            await alunoService.patchAluno(params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err))
        } catch (err) {
            next(err);
        }
    }
    
module.exports.getAluno = getAluno
module.exports.postAluno = postAluno
module.exports.deleteAluno = deleteAluno
module.exports.putAluno = putAluno
module.exports.patchAluno = patchAluno