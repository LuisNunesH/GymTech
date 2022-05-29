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
        dashboardModel.informar(valor, idUsuario)
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
}

function editar(req, res) {
    var novoValor = req.body.valor;
    var idIMC = req.params.idIMC;

    dashboardModel.editar(novoValor, idIMC)
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
    editar
}