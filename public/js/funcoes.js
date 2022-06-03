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

    // if (sessaoIMC == undefined || sessaoIMC == null) {
    //     // window.alert(`Seja bem-vindo, ${nome}!`);
    //     // if (h1LoginUsuario != undefined) {
    //     //     h1LoginUsuario.innerHTML = email;
    //     // }
    //     mostrarIMC.innerHTML = 'Nenhum valor inserido';

    //     // finalizarAguardar();
    // } else{
    //     // mostrarIMC.innerHTML = valor;
    // }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
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
function imc(){
    var imc = inptIMC.value;
    if(imc >= 18.5 && imc < 24.9 && imc > 0){
        corpoCc2.style.display = 'none';
        b2.innerHTML = `<img src="assets/img/pessoa.png">`;
        auxB1.innerHTML = '';
        corpoCc3.style.height = '400px';
        b2.style.display = 'block';
        b1.innerHTML = `
        Seu IMC é ${imc} <br>
Abaixo de 24.9 <br>
<p style='color: rgb(0, 255, 0);''>Peso Normal</p>
Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais. <br><br>

* Cálculos válidos apenas para pessoas adultas. <br>
<a href='conteudo.html' style='color: black';> Dashboards </a>
`;
    }
 else if(imc >= 25 && imc <= 29.9){
    corpoCc2.style.display = 'none';
    b2.innerHTML = `<img src="assets/img/sobrepeso.png">`;
    auxB1.innerHTML = '';
        corpoCc3.style.height = '400px';
        b2.style.display = 'block';
    b1.innerHTML = `
        Seu IMC é ${imc} <br>
        IMC entre 25.0 e 29.9 <br>
<p style='color: rgb(255, 251, 0);'>Sobrepeso</p>
Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico. <br><br>

* Cálculos válidos apenas para pessoas adultas. <br>
<a href='conteudo.html' style='color: black';> Dashboards </a>
`;
}  else if(imc >= 30 && imc <= 34.9){
    corpoCc2.style.display = 'none';
    b2.innerHTML = `<img src="assets/img/obeso1.png">`;
    auxB1.innerHTML = '';
        corpoCc3.style.height = '400px';
        b2.style.display = 'block';
    b1.innerHTML = `
        Seu IMC é ${imc} <br>
        IMC entre 30.0 e 34.9 <br>
<p style='color: rgb(255, 136, 0);'>Obesidade grau 1</p>
Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você. <br><br>

* Cálculos válidos apenas para pessoas adultas. <br>
<a href='conteudo.html' style='color: black';> Dashboards </a>
`;
}
else if(imc > 34.9 && imc <= 40){
    corpoCc2.style.display = 'none';
    b2.innerHTML = `<img src="assets/img/obeso2.png">`;
    auxB1.innerHTML = '';
        corpoCc3.style.height = '400px';
        b2.style.display = 'block';
    b1.innerHTML = `
        Seu IMC é ${imc} <br>
        IMC entre 35.0 e 39.9 <br>
<p style='color: rgb(134, 15, 15);'>Obesidade grau 2</p>
Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo. <br><br>

* Cálculos válidos apenas para pessoas adultas. <br>
<a href='conteudo.html' style='color: black';> Dashboards </a>
`;
}
}