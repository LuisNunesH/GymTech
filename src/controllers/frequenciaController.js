var frequenciaModel = require("../models/frequenciaModel");

function registrarFre(req, res) {
    var valorB = req.body.valorB;
    var idUsuario = req.params.idUsuario;

    if (valorB == undefined) {
        res.status(400).send("O valor está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        frequenciaModel.verificarExistencia(idUsuario)
            .then(
                function (resultado) {
                    if(resultado == 0){
                        frequenciaModel.informar(valorB, idUsuario)
                            .then(
                                function (resultado) {
                                    res.json(resultado);
                                }
                            )
                    }else{
                        frequenciaModel.editar(valorB, idUsuario)
                            .then(
                                function (resultado) {
                                    res.json(resultado);
                                }
                            )
                    }
                    
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrarFre
}