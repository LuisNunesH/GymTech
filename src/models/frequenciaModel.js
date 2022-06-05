var database = require("../database/config");

function informar(valorB, idUsuario) {
    if (valorB != null) {
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", valorB, idUsuario);
        var instrucao = `
            INSERT INTO frequencia (tempo, fkUsuario) VALUES ('${valorB}', ${idUsuario});
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }
    else{
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", valorB, idUsuario);
        var instrucao = `
            INSERT INTO frequencia (tempo, fkUsuario) VALUES ('${valorB}', ${idUsuario});
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }
}

function editar(valorB, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", valorB, idUsuario);
    var instrucao = `
        UPDATE frequencia SET tempo = ('${valorB}') where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarExistencia(idUsuario){
    var instrucao = `
        SELECT * FROM frequencia where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirFrequencia(idUsuario) {
    var instrucao = `
        SELECT tempo FROM frequencia where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    informar,
    editar,
    verificarExistencia,
    exibirFrequencia
}
