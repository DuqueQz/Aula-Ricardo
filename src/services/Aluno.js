const getAluno = async (params) => {
    let aluno ={}
    if (params.name === "Matheus") {
        aluno.id = 16105
        aluno.nome = "Matheus"
        aluno.sobrenome = "Togni"
        aluno.notas =[]
        aluno.notas.push(10)
        aluno.notas.push(9)
    } else {
        throw "Aluno não cadastrado"
    }
    return aluno
}

module.exports.getAluno = getAluno