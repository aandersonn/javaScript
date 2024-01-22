const inNumero = document.getElementById("inNumero");
const btnApostar = document.getElementById("btnApostar");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const outErros = document.getElementById("outErros");
const outChances = document.getElementById("outChances");
const outDica = document.getElementById("outDica");

let erros = [];
let numeroGerado = Math.floor(Math.random() * 100) + 1;
const numeroDeChances = 6;

function apostarNumero {
    let numeroApostado = Number(inNumero.value);

    //Checa a validade do número
    if(numeroApostado <= 0 || numeroApostado > 100 || isNaN(numeroApostado)) {
        alert("Informe um número válido");
        inNumero.value = "";
        inNumero.focus();
        return
    }

    
}