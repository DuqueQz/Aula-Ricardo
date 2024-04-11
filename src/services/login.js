const db = require('../config/db')
const jwt = require('jsonwebtoken')
const cript = require('../utils/salt')

const sql_get = 
` select usuarios.usu_name,
         usuarios.usu_salt,
         usuarios.usu_password
    from usuarios
   where usu_name = $1 `

const login = async (params) => {
    const {user, pass} = params
    result = await db.query(sql_get, [user])
    if (!result.rows.lengh) throw new Error("USUÁRIO NÃO EXISTE!")
    else {
        const salt = result.rows[0].usu_salt
        const password = result.rows[0].usu_password
        if (cript.comparePassword(password, salt, pass)) {
            let perfilAcesso = result.rows[0].usu_name
            let token = jwt.sign({perfilAcesso}, process.env.PRIVATE_AUTH, {algorithm: 'RS256', expiresIn: '7d' })
            return {
                status: 'Logado com sucesso!',
                user: result.rows[0].usu_name,
                token : token
            }
        } else {
            throw { status: 400, type: 'WARN', message: `Senha Inválida!`, detail: ''}
        }
    }
}

module.exports.login = login