const db = require('../configs/pg')
const cript = require('../utils/salt')

const sql_insert =
` insert into users (username, salt, usu_password)
                values ($1, $2, $3)`

const newUser = async(params) => {
    const {user, pass} = params
    console.log(params)
    const {salt, hashedPassword} = cript.criarUsuario(pass)
    result = await db.query(sql_insert, [user, salt, hashedPassword])
    return result
}

const sql_get = `select id, username from users`

const getUser = async () => {
    result = await db.query(sql_get, [])
    return {
        total: result.rows.length,
        usuarios: result.rows
    }
}

const sql_delete = `delete from users where id = $1`

const deleteUser = async (params) => {
    return await db.query(sql_delete, [params.id])
}

const sql_put = 
    `update users
        set username = $2
     where id = $1`

const getUserId = async (id) =>{
    const query = 'SELECT username, salt, usu_password FROM users WHERE id = $1';
    result = await db.query(query, [id])
    return result.rows[0];
}
 
const putUser = async (params) => {
    const {id, name, password} = params
    const userData = await getUserId(id)
    const validorPassword = cript.comparePassword(userData.usu_password,userData.salt,password)
    console.log(validorPassword)
    if(validorPassword){      
        return await db.query(sql_put, [ id, name])
    }else{
        return console.error('errou')
    }
}

const sql_patch =
        `update users
            set `

const patchPassword = async (params) => {
    let binds = []
    let hashedNewPassword;
    const {id, name, password, newPassword} = params
    const userData = await getUserId(id)
    let validorPassword = cript.comparePassword(userData.usu_password,userData.salt, password)
    if(validorPassword){
        validorPassword = cript.comparePassword(userData.usu_password,userData.salt, newPassword)
        if(!validorPassword){
            hashedNewPassword = cript.hashPassword(newPassword, userData.salt)
            let sql = `usu_password = '${hashedNewPassword}' where id = ${id} `
            binds.push(sql)
            console.log(binds)  
            return await db.query(sql_patch + sql)
        }else{
            console.error('Senha igual');
            return "Nova senha deve ser diferente da senha atual.";
        }
    }else{
       return console.error('Senha inválida')    
    }
}

module.exports.newUser = newUser
module.exports.getUser = getUser
module.exports.deleteUser = deleteUser
module.exports.putUser = putUser
module.exports.patchPassword = patchPassword