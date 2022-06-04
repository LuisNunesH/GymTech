// const { exibir } = require("../../src/models/dashboardModel");

// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var sessaoIMC = sessionStorage.IMC_USUARIO;

    if (email != null && nome != null) {
    } else {
        window.location = "./login.html";
    }

}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}