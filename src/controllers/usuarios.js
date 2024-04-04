const usuarioService = require(' ../services/usuarios')

const newUser = async (req, res, next) => {
    try {
        const retorno = await usuarioService.newUser(req.body)
        res.status(201).json(retorno)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getUser = async (req, res, next) => {
    try {
        const retorno = await usuariosService.getUser()
        res.status(201).json(retorno)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const retorno = await usuariosService.deleteUser(req.params)
        res.status(201).json(retorno)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

