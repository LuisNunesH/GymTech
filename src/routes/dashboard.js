var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    dashboardController.listar(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    dashboardController.informar(req, res);
});

router.put("/editar/:idIMC", function (req, res) {
    dashboardController.editar(req, res);
});

router.put("/exibir/:idUsuario", function (req, res) {
    dashboardController.exibir(req, res);
});

module.exports = router;