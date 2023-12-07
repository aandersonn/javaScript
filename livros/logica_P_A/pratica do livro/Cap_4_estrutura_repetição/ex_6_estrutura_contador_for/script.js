//função -> conjunto de códigos
function verificarPrimo() {
    //cria referência aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outVerificado = document.getElementById("outVerificado");

    //Obtém o número informado
    var numero = Number(inNumero.value);

    //Verifica se preencheu o campo inNumero
    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número!");
        inNumero.focus();
        return
    };

    //declara e inicializa o contador
    var temDivisor = 0;

    //Percorre todos os possíveis divisores do número
    for(var i = 2; i <= numero / 2; i++) {
        
        if(numero % i == 0) {
            //muda o flag
            temDivisor = 1;
            break //sai da repetição 
        }
    }

    //Se numero > 1 e não possui divisor
    if(numero > 1 && !temDivisor) {
        outVerificado.textContent = numero + " é primo"
    } else {
        outVerificado.textContent = numero + " não é primo"
    }
}

//referencia elemento e após associa function ao elemento click
var btPrimo = document.getElementById("btPrimo");
btPrimo.addEventListener("click", verificarPrimo)