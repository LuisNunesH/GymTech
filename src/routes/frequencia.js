var express = require("express");
var router = express.Router();

var frequenciaController = require("../controllers/frequenciaController");

router.post("/registrarFre/:idUsuario", function (req, res) {
    frequenciaController.registrarFre(req, res);
});

router.post("/exibirFre/:idUsuario", function (req, res) {
    frequenciaController.exibirFre(req, res);
});

router.post("/resetarFre/:idUsuario", function (req, res) {
    frequenciaController.resetarFre(req, res);
});

module.exports = router;