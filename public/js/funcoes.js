// const { exibir } = require("../../src/models/dashboardModel");

// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var sessaoIMC = sessionStorage.IMC_USUARIO;

     var Anome = document.getElementById("Anome");
     var mostrarIMC = document.getElementById("mostrarIMC");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        // if (h1LoginUsuario != undefined) {
        //     h1LoginUsuario.innerHTML = email;
        // }
        Anome.innerHTML = nome;

        // finalizarAguardar();
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


function calcular(){
    if(altura.value == "" || peso.value == "" || peso.value == 0 || altura.value == 0){
        ladoA.innerHTML = `<p style='font-size: 40px; font-family: typewcond; padding-top: 0px;'>Erro ao realizar o cálculo!</p>`;
    }   else{
            var al = Number(altura.value);
            var pe = Number(peso.value);

            var imc = pe / (al * al);
            ladoA.innerHTML = `<p style='font-size: 40px; font-family: typewcond; padding-top: 0px;'>Seu IMC é: ${imc.toFixed(1)}</p>`;
    }
}