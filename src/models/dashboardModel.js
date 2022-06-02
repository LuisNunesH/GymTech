var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            i.id AS idIMC,
            i.tipo,
            i.valor,
            i.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM imc i
            INNER JOIN usuario u
                ON i.fkUsuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function informar(valor, idUsuario) {
    if (valor != null) {
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", valor, idUsuario);
        var instrucao = `
            INSERT INTO imc (valor, fkUsuario) VALUES ('${valor}', ${idUsuario});
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }
    else{
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", valor, idUsuario);
        var instrucao = `
            INSERT INTO imc (valor, fkUsuario) VALUES ('${valor}', ${idUsuario});
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    }
}

function editar(valor, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", valor, idUsuario);
    var instrucao = `
        UPDATE imc SET valor = ('${valor}') where idIMC = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibir(idUsuario) {
    var instrucao = `
        SELECT valor FROM imc where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarExistencia(idUsuario){
    var instrucao = `
        SELECT * FROM imc where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    informar,
    editar,
    verificarExistencia,
    exibir
}
