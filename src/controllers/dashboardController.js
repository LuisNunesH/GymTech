var dashboardModel = require("../models/dashboardModel");

function testar(req, res) {
    console.log("ENTRAMOS NO dashboardController");
    res.send("ENTRAMOS NO DASHBOARD CONTROLLER");
}

function informar(req, res) {
    var valor = req.body.valor;
    var idUsuario = req.params.idUsuario;

    if (valor == undefined) {
        res.status(400).send("O valor está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        dashboardModel.verificarExistencia(idUsuario)
            .then(
                function (resultado) {
                    if(resultado == 0){
                        dashboardModel.informar(valor, idUsuario)
                            .then(
                                function (resultado) {
                                    res.json(resultado);
                                }
                            )
                    }else{
                        dashboardModel.editar(valor, idUsuario)
                            .then(
                                function (resultado) {
                                    res.json(resultado);
                                }
                            )
                    }
                    
                }
            )
        // dashboardModel.informar(valor, idUsuario)
        //     .then(
        //         function (resultado) {
        //             res.json(resultado);
        //         }
        //     )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function exibir(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.exibir(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
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

module.exports = {
    testar,
    informar,
    exibir
}