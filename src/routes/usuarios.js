const usuariosController = require('../controllers/usuarios')

module.exports = (app) => {
    app.post('/user', usuariosController.newUser)
    app.get('/user', usuariosController.getUser)
    app.delete('/user/:id', usuariosController.deleteUser)
    app.put('/user/:id', usuariosController.putUser)
    app.patch('/user', usuariosController.patchPassword)
}